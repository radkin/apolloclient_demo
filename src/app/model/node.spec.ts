import { Node } from './node';

const node: Node = {
  name: '',
  masterVersion: '',
  locations: []
}

describe('Node', () => {
  it('should create an instance', () => {
    expect(new Node(
      node.name,
      node.masterVersion,
      node.locations
    )).toBeTruthy();
  });
});
