import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import {  map } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
// custom
import { DataSharingService } from '../services/data-sharing.service';

export interface CustomResponse {
  data: any;
}

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {
  customers: object;
  pageInfo: object;
  p = 1;
  count = 16;
  locations: Array<string>;
  queryField: FormControl = new FormControl();
  query$: Subscription;
  public searchString = '';

  constructor(
    private logger: NGXLogger,
    private apollo: Apollo,
    private dataSharingService: DataSharingService
  ) {

    const count = this.count;
    const cursor = this.p - 1;
    this.locations = ['NYC', 'SFO', 'LAX'];
    this.query$ = this.dataSharingService.query.subscribe( async query => {
      console.log('query is ', query);
      this.apollo.watchQuery({
        query: gql`{
          searchCustomers(cursor:${cursor}, count:${count}, term:"${query}"){
            pageInfo {
              total
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
              queryDuration
            }
            edges {
              node {
                name
                masterVersion
                locations
              }
            }
          }
        }`
      })
      .valueChanges.pipe(map(
          (response) => response
        ))
        .subscribe((response: CustomResponse) => {
          this.logger.debug('searchCustomers()', response);
          this.customers = response.data.searchCustomers.edges;
          this.pageInfo = response.data.searchCustomers.pageInfo;
        });
    });
    }

  ngOnInit(): void {
  }

}
