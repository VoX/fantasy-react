import { IRequest } from "./IRequest";

export class ServiceClient  {
    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    public async get<TResponse>(request:IRequest<TResponse>):Promise<TResponse> {
        const response = await fetch(`${this.connectionString}/${request.pathTemplate}`, {mode: "cors"});
        const body = await response.text();
        return JSON.parse(body) as TResponse;
    }
}