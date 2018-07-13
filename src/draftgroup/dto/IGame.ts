import { IGameAttribute } from "./IGameAttribute";
export interface IGame {
    gameId: number;
    awayTeamId: number;
    homeTeamId: number;
    startDate: Date;
    location: string;
    timeRemainingStatus: string;
    sport: string;
    status: string;
    description: string;
    sportSpecificData: any;
    league: string;
    competitionStatus: string;
    gameAttributes: IGameAttribute[];
}