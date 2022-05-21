import LifeGame from "./game";

export type Board = {
    width: number;
    height: number;
    grid: Grid;
}

export type Grid = CellState[][];

export type CellState = 'alive' | 'dead';

export type GameState = 'active' | 'finish';

export type LifeGames = {
    [key: string]: LifeGame;
}

export type GridRequest = {
    grid: Grid;
};

export type GameResponse = {
    grid: Grid;
    gameState: GameState;
};