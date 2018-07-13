import Enumerable from "typescript-dotnet-commonjs/System.Linq/Linq"
import { ContestProvider } from "./ContestProvider";
import { IDisplayContest } from "./IDisplayContest";
import { SportsProvider } from "./SportsProvider";

export class DisplayContestProvider {
    private contestprovider: ContestProvider;
    private sportsProvider: SportsProvider;

    constructor(contestProvider: ContestProvider,
        sportsProvider: SportsProvider) {
        this.contestprovider = contestProvider;
        this.sportsProvider = sportsProvider;
    }

    public async getDisplayContests(sport: string): Promise<IDisplayContest[]> {
        const contestResponse = await this.contestprovider.getContests(sport);
        const contests = Enumerable.from(contestResponse.Contests);
        const sportsResponse = await this.sportsProvider.getSports();
        const sports = Enumerable.from(sportsResponse.sports);

        return contests.select(c => ({
            attributes: Enumerable.from(c.attr).where(x => x.value === "true").select(x => x.key).toArray(),
            entries: c.ec,
            fee: `$${c.a}`,
            id: c.id,
            maxEntries: c.m,
            multiEntries: c.mec,
            name: c.n,
            prizes: c.pd.Cash + (c.pd.Ticket === null || c.pd.Ticket === undefined ? "" : ` + ${c.pd.Ticket}`),
            sport: sports.where(s => s.sportId === c.s).first().fullName,
            start: this.getDate(c.sd),
            style: c.gameType
        })).toArray();
    }

    private getDate(datestr: string) {
        const offset = "/Date(".length;
        return new Date(datestr.substr(offset).substr(0, datestr.length - offset - 2));
    }
}