import { ContestProvider } from "./ContestProvider";
import { IDisplayContest } from "./IDisplayContest";
import { List } from 'linqts';
import { SportsProvider } from "./SportsProvider";
import { IContest } from "./dto/IContest";
import { ISport } from "./dto/ISport";

export class DisplayContestProvider {
    private contestprovider: ContestProvider;
    private sportProvider: SportsProvider;


    constructor(contestProvider: ContestProvider, sportsProvider:SportsProvider) {
        this.contestprovider = contestProvider;
        this.sportProvider = this.sportProvider;
    }

    public async getDisplayContests(sport: string):Promise<IDisplayContest[]> {
        const contestResponse = await this.contestprovider.getContests(sport);
        const contests = new List<IContest>(contestResponse.Contests);
        const sportsResponse = await this.sportProvider.getSports();
        const sports = new List<ISport>(sportsResponse.sports);
        //return [{name : "hi", sport : "MLB", attributes : [""], fee : "$15", start : new Date(), entries : 2, id : 1337, maxEntries: 5, multiEntries: 1, prizes : "$1,500", style : "Classic"}];
        return contests.Select(c=> ({name : c.n, sport : , attributes : [], fee : "$15", start : new Date(), entries : 2, id : 1337, maxEntries: 5, multiEntries: 1, prizes : "$1,500", style : "Classic"})).ToArray();
    }

    private lookupSport(contest:IContest, sports:List<ISport>){
        return sports.First((x) => )
    }
}