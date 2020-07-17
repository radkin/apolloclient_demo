import { PageInfo } from './page-info';
import { Edges } from './edges';

export class Customer {

  constructor(
    public pageInfo: PageInfo,
    public edges: Edges
  ) {}
}
