export interface Entity {
    id: number;
    name: string;
    link: string;
    type: number;
    selected?: boolean;
}

export interface EntityJson {
    popular: number;
    src: string;
    name: string;
    selected?: boolean;
    link?: string;
}

export interface gameData {
    entities: EntityJson[];
    selected: EntityJson;
}

export interface gameInfo {
    gameName: string;
    gameUrl: string;
    levels?: number;
}

export enum levelsEnum {
    easy = 'FÁCIL',
    medium = 'INTERMEDIO',
    hard = 'DIFÍCIL',
    very_hard = 'MUY_DIFÍCIL',
    impossible = 'IMPOSIBLE'
}
export const levelsArray = Object.values(levelsEnum);

export interface gameStats {
    left : number;
    correctAnswers: number;
    failedAnswers: number;
   }


export interface gameStats {
    left : number;
    correctAnswers: number;
    failedAnswers: number;
}

export interface Range {
    bottom: number;
    top: number;
}
   
export interface LevelInterval {
    bottom: number;
    top: number;
}
   