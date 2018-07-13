export interface ICompetition {
    GameId: number;
    AwayTeamId: number;
    HomeTeamId: number;
    HomeTeamScore: number;
    AwayTeamScore: number;
    HomeTeamCity: string;
    AwayTeamCity: string;
    HomeTeamName: string;
    AwayTeamName: string;
    StartDate: Date;
    Location: string;
    LastPlay?: any;
    TeamWithPossession: number;
    TimeRemainingStatus: string;
    Sport: string;
    Status: string;
    Description: string;
    FullDescription: string;
    ExceptionalMessages: any[];
    SeriesType: number;
    NumberOfGamesInSeries: number;
    SeriesInfo?: any;
    HomeTeamCompetitionOrdinal: number;
    AwayTeamCompetitionOrdinal: number;
    HomeTeamCompetitionCount: number;
    AwayTeamCompetitionCount: number;
}