import { ServiceClient } from "../service/ServiceClient";
import { IContestResponse } from "./dto/IContestResponse";

export class ContestProvider {
    private serviceClient: ServiceClient;

    constructor(serviceClient:ServiceClient) {
        this.serviceClient = serviceClient;
    }

    public getContests(sport: string) {
        return this.serviceClient.get<IContestResponse>({pathTemplate:""});
    }
}