import { IReturns } from "./IRequest";

export class ServiceClient  {
    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    public async get<TResponse>(IReturns<TResponse> request) {
        const response = await fetch(`${this.connectionString}/lobby/getcontests?sport=${sport}`, {mode: "cors"});
        const body = await response.text();
        return JSON.parse(body) as TResponse;
    }
}