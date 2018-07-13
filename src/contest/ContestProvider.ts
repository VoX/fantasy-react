import { ServiceClient } from "../service/ServiceClient";
import { IContestRequest } from "./dto/IContestRequest";
import { IContestResponse } from "./dto/IContestResponse";

export class ContestProvider {
    private serviceClient: ServiceClient;

    constructor(serviceClient:ServiceClient) {
        this.serviceClient = serviceClient;
    }

    public getContests(sport: string):Promise<IContestResponse> {
        return this.serviceClient.get<IContestRequest>();
    }
}