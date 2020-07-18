import { Node } from './node';

const node: Node = {
  name: '',
  price: '',
  locations: []
}

describe('Node', () => {
  it('should create an instance', () => {
    expect(new Node(
      node.name,
      node.price,
      node.locations
    )).toBeTruthy();
  });
});
