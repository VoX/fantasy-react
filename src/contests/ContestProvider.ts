import { IContestResponse } from "./dto/IContestResponse";

export class ContestProvider {
    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    public async getContests(sport: string) {
        const response = await fetch(`${this.connectionString}/lobby/getcontests?sport=${sport}`);
        const body = await response.text();
        return JSON.parse(body) as IContestResponse;
    }
}