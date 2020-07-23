import { Customer } from './customer';
import { PageInfo } from './page-info';
import { Node } from './node';
import { Edges } from './edges';

const node: Node = {
  name: '',
  baselinePrice: '',
  locations: []
};

const customer: Customer = {
  pageInfo: new PageInfo('', '', '', '', '', ''),
  edges: new Edges(node)
};

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer(
      customer.pageInfo,
      customer.edges
    )).toBeTruthy();
  });
});
