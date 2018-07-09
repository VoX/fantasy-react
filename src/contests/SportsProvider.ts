import { IContestResponse } from "./dto/IContestResponse";
import { ISportConfigResponse } from "./dto/ISportConfigResponse";

export class SportsProvider {
    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    public async getSports() {
        const response = await fetch(`${this.connectionString}/sports/v1/sports?format=json`);
        const body = await response.text();
        return JSON.parse(body) as ISportConfigResponse;
    }
}