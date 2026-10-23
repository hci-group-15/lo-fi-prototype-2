export interface Topic {
    'name': string;
    'id': string;
    'modified': Date;
    /**
     * The completion in [0, 1]
     */
    'completion': number;
    'topics': Topic[]
}
