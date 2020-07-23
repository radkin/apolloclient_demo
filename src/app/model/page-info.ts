export class PageInfo {
  constructor(
    public total: string,
    public hasNextPage: string,
    public hasPreviousPage: string,
    public startCursor: string,
    public endCursor: string,
    public queryDuration: string
  ) {}
}
