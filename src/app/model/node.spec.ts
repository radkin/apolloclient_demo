import { Node } from './node';

const node: Node = {
  name: '',
  baselinePrice: '',
  locations: []
}

describe('Node', () => {
  it('should create an instance', () => {
    expect(new Node(
      node.name,
      node.baselinePrice,
      node.locations
    )).toBeTruthy();
  });
});
