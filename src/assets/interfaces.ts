export interface Entity {
    id: number;
    name: string;
    link: string;
    type: number;
    selected?: boolean;
}

export interface EntityDescription {
    popular: number;
    src: string;
    name: string;
    selected?: boolean;
    link?: string;
}

export interface gameData {
    entities: EntityDescription[];
    selected: EntityDescription;
}

export interface gameInfo {
    gameName: string;
    gameUrl: string;
}

export interface gameStats {
    leftTurns : number;
    failedAnswers: number;
    correctAnswers: number;
    points : number;
}
   
export interface LevelInterval {
    bottom: number;
    top: number;
}

export enum AnswerType {
    CORRECT = "CORRECT",
    WRONG   = "WRONG"
}

export enum Status {
    ON,
    OFF
}

export interface GameBack {
    mainArray: EntityDescription[];
    possibleTrues: number[][];
}

// export interface GameBack {
//     mainArray: EntityDescription[];
//     possibleTrues: number[][];
//     levelsByDensity: LevelInterval[];
// }