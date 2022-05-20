import LifeGame from "./game";

export type Board = {
    width: number;
    height: number;
    grid: CellState[][];
}

export type CellState = 'alive' | 'dead';

export type GameState = 'active' | 'finish';

export type LifeGames = {
    [key: string]: LifeGame;
}

export type NewGameRequest = {
    grid: CellState[][];
};