export interface IDraftGroup {
    DraftGroupId: number;
    ContestTypeId: number;
    StartDate: Date;
    StartDateEst: Date;
    SortOrder: number;
    DraftGroupTag: string;
    GameTypeId: number;
    GameType?: any;
    SportSortOrder: number;
    Sport: string;
    GameCount: number;
    ContestStartTimeSuffix: string;
    ContestStartTimeType: number;
    Games?: any;
    DraftGroupSeriesId: number;
    GameSetKey: string;
    AllowUGC?: boolean;
}