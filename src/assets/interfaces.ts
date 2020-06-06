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
    levels?: number;
}


export interface gameStats {
    left : number;
    correctAnswers: number;
    failedAnswers: number;
   }

   
export interface LevelInterval {
    bottom: number;
    top: number;
}
   
   
export interface GameBack {
    mainArray: EntityDescription[];
    possibleTrues: LevelInterval[];
    levelsByDensity: number[][];
}
   