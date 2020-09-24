
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// custom
import { Customer } from '../model/customer';
import { PageInfo } from '../model/page-info';
import { Node } from '../model/node';
import { Edges } from '../model/edges';
import { SearchCustomersComponent } from './search-customers.component';
// import { DataSharingService } from '../services/data-sharing.service';

describe('SearchCustomersComponent', () => {
  let component: SearchCustomersComponent;
  let fixture: ComponentFixture<SearchCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [ApolloTestingModule, HttpClientTestingModule,
        NgxPaginationModule, ReactiveFormsModule,
      ],
      declarations: [ SearchCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // const apollo = TestBed.get(ApolloTestingController);
    // const dataShare = new DataSharingService;
    // const dataShareQuery = TestBed.get(dataShare);
    // const searchCustomersComponent = new SearchCustomersComponent(apollo, dataShareQuery);
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

  it('should be customer data', () => {
    const node = new Node('coal-kitchen', '$7.00', [] );
    const customer: Customer = {
      pageInfo: new PageInfo('1', '', '', '', '', ''),
      edges: new Edges(node)
    };
    const customers: Array<Customer> = [customer];
    component.customers = customers;
    expect(component.customers.length >= 1).toBeTruthy();
    component.customers.forEach(comp => {
      expect(comp.pageInfo.total).toBe('1');
      expect(comp.edges.node.name).toBe('coal-kitchen');
    });


  });

});
