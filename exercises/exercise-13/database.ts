interface PropertyFilter {
    $eq?: string | number;
    $gt?: string | number;
    $lt?: string | number;
    $in?: string[] | number[];
}

interface PropertyQuery {
    [k: string]: PropertyFilter;
}

interface MultiplePropertiesQuery {
    $and?: PropertyQuery[];
    $or?: PropertyQuery[];
}

interface TextSearchQuery {
    $text: string;
}

type Query = PropertyQuery | TextSearchQuery | MultiplePropertiesQuery;

export class Database<T> {
    protected filename: string;
    protected fullTextSearchFieldNames: unknown[];

    constructor(filename: string, fullTextSearchFieldNames: string[]) {
        this.filename = filename;
        this.fullTextSearchFieldNames = fullTextSearchFieldNames;
    }

    async find(query: Query): Promise<T[]> {
        return [];
    }
}
