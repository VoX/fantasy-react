import { IContest } from "./IContest";
import { IDraftGroup } from "./IDraftGroup";
import { IGameSet } from "./IGameSet";
import { IGameType } from "./IGameType";
export interface IContestResponse {
    SelectedSport: number;
    Contests: IContest[];
    DraftGroups: IDraftGroup[];
    GameSets: IGameSet[];
    GameTypes: IGameType[];
    MarketingOffers: string[];
    DirectChallengeModal?: any;
    DepositTransaction?: any;
    ShowRafLink: boolean;
    PrizeRedemptionModel?: any;
    PrizeRedemptionPop: boolean;
    UseRaptorHeadToHead: boolean;
    UseGameSetFilter: boolean;
    SportMenuItexportems?: any;
    UserGeoLocation?: any;
    ShowAds: boolean;
    IsVip?: any;
}