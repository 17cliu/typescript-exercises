import { fs } from 'mz';

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

    async open() {
        const file = await fs.readFile(this.filename);
        const lines = file.toString().split('\n');
        const records = lines.reduce((memo: object[], line) => {
            if (line.startsWith('E')) {
                const record = JSON.parse(line.slice(1));
                memo.push(record);
            }
            return memo;
        }, []);
        return records;
    }

    async find(query: Query): Promise<T[]> {
        const records = await this.open();
        console.log(records)
        return [];
    }
}
