/*
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// custom
import { Customer } from '../model/customer';
import { PageInfo } from '../model/page-info';
import { Node } from '../model/node';
import { Edges } from '../model/edges';
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

  it('should be no applications if there is no data', () => {
    expect(searchCustomersComponent.customer.edges.node.name.length).toBe(0);
  });

  it('should be customers if there is data', () => {
    const node: Node = {
      name: '',
      masterVersion: '',
      locations: []
    }
    const customer: Customer = {
      pageInfo: new PageInfo('','','','','',''),
      edges: new Edges(node)
    };
    const customers: Array<Customer> = [customer];
    searchCustomersComponent.customers = customers;
    expect(searchCustomersComponent.customers.length).toBe(1);
  });

});
*/
