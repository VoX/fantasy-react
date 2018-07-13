import { IContestType } from "./IContestType";
import { IGame } from "./IGame";
import { ILeague } from "./ILeague";

export interface IDraftGroup {
    draftGroupId: number;
    contestType: IContestType;
    sportId: number;
    startTimeSuffix: string;
    startTimeType: string;
    minStartTime: Date;
    maxStartTime: Date;
    draftGroupState: string;
    allowUgc: boolean;
    leagues: ILeague[];
    games: IGame[];
    gameTypeId: number;
    allTags: any[];
}