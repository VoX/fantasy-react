export interface IContest {
    name: string;
    style: string;
    fee: string;
    prizes: string;
    attributes: [string];
    start: Date;
    id: number;
    entries: number;
    maxEntrie: number;
    multiEntries: number;
    sport: string;
}

