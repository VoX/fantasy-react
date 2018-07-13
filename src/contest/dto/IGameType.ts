import { IGameStyle2 } from "./IGameStyle2";
export interface IGameType {
    GameTypeId: number;
    Name: string;
    Description: string;
    Tag: string;
    SportId: number;
    DraftType: string;
    GameStyle: IGameStyle2;
}