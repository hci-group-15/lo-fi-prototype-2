export interface Folder {
    'name': string;
    'items': number;
    'modified': Date;
}


export interface Topic {
    'name': string;
    /**
     * The completion in [0, 1]
     */
    'completion': number;
    'topics': Topic[]
}
