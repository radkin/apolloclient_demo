import { Node } from './node';
import { Edges } from './edges';

const node: Node = {
  name: '',
  baselinePrice: '',
  locations: []
};

const edges: Edges = {
  node
};

describe('Edges', () => {
  it('should create an instance', () => {
    expect(new Edges(
      edges.node
    )).toBeTruthy();
  });
});
