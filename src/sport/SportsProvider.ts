import { ServiceClient } from "../service/ServiceClient";
import { ISportConfigResponse } from "./dto/ISportConfigResponse";

export class SportsProvider {
    private serviceClient: ServiceClient;

    constructor(serviceClient: ServiceClient) {
        this.serviceClient = serviceClient;
    }

    public getSports() {
        return this.serviceClient.get<ISportConfigResponse>({pathTemplate: "/sports/v1/sports?format=json"})
    }
}