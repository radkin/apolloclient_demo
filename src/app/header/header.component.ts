import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, share } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
// import { NGXLogger } from 'ngx-logger';
import { FormControl } from '@angular/forms';
import { DataSharingService } from '../services/data-sharing.service';

export interface CustomResponse {
  data: any;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  queryField: FormControl = new FormControl();
  query$: Subscription;
  public searchString = '';

  constructor(
    // private logger: NGXLogger,
    private dataSharingService: DataSharingService
  ) {
    this.query$ = this.queryField.valueChanges
      .pipe(
        startWith(this.searchString),
        debounceTime(500),
        distinctUntilChanged(),
        share()
      )
      .subscribe((query) => {
        this.dataSharingService.query.next(query);
      });
  }

  ngOnInit() {
  }

}
