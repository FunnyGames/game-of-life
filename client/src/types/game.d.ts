export type Board = {
    width: number;
    height: number;
    grid: Grid;
}

export type Grid = CellState[][];

export type CellState = 'alive' | 'dead';

export type GameState = 'active' | 'finish';