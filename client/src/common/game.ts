import { Grid } from '../types/game';

export const initNewGameGrid = () => {
    const grid: Grid = new Array(50);
    const length = grid.length;

    for (let i = 0; i < length; ++i) {
        grid[i] = new Array(50).fill('dead');
    }

    return grid;
}

export const toggleCell = (grid: Grid, row: number, cell: number) => {
    const next = grid[row][cell] === 'dead' ? 'alive' : 'dead';
    const newGrid: Grid = [...grid];
    newGrid[row][cell] = next;
    return newGrid;
}