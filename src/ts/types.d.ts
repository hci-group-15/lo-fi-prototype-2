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

export interface Flashcard {
    'name': string;
    'id': string;
    'target': string;
    'hints' : string[];
    'modified': Date;
    'solved_correctly': number | null;
    'topic_id': number | null;
    'branches_ids' : string[];
}

export interface ChatMessagePair {
    'question': string;
    'response': string;
    'summary'?: string;
    'child'?: ChatMessagePair;
    'branches'?: ChatMessagePair[];
}
