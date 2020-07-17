import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {NgxPaginationModule} from 'ngx-pagination';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomersComponent } from './search-customers.component';

describe('SearchCustomersComponent', () => {
  let component: SearchCustomersComponent = null;
  let fixture: ComponentFixture<SearchCustomersComponent>;
  const searchCustomersComponent = new SearchCustomersComponent(null, null, null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule, HttpClientTestingModule,
        NgxPaginationModule, ReactiveFormsModule,
        LoggerModule.forRoot({
          level: NgxLoggerLevel.TRACE,
          serverLogLevel: NgxLoggerLevel.ERROR,
          disableConsoleLogging: false
        }),
      ],
      declarations: [ SearchCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set instance correctly', () => {
    expect(SearchCustomersComponent).not.toBeNull();
  });

});
