import { PageInfo } from './page-info';

const pageInfo: PageInfo = {
  total: '',
  hasNextPage: '',
  hasPreviousPage: '',
  startCursor: '',
  endCursor: '',
  queryDuration: ''
};

describe('PageInfo', () => {
  it('should create an instance', () => {
    expect(new PageInfo(
      pageInfo.total,
      pageInfo.hasNextPage,
      pageInfo.hasPreviousPage,
      pageInfo.startCursor,
      pageInfo.endCursor,
      pageInfo.queryDuration
    )).toBeTruthy();
  });
});
