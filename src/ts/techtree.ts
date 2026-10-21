export interface TechTree {
    'nodes': Node[];
    'edges': Edge[];
}

export interface Node {
    'name': string;
    'x': number;
    'y': number;
}

export interface Edge {
    'from': number;
    'to': number;
}
