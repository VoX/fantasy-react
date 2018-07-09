import { ICompetition } from "./ICompetition";
import { IGameStyle } from "./IGameStyle";
export interface IGameSet {
    GameSetKey: string;
    ContestStartTimeSuffix: string;
    Competitions: ICompetition[];
    GameStyles: IGameStyle[];
    SortOrder?: any;
    MinStartTime: Date;
    Tag: string;
}