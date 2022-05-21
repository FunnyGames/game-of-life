import { GameResponse, GameState, Grid } from './type';

class LifeGame {
    static createNewGrid(width: number, height: number) {
        const newGrid: Grid = new Array(width);
        for (let i = 0; i < width; ++i) {
            newGrid[i] = new Array(height).fill('dead');
        }
        return newGrid;
    }

    static playNextMove(grid: Grid): GameResponse {
        const [width, height] = this.getDimensions(grid);
        const newGrid = this.createNewGrid(width, height);

        let aliveCells = 0;
        for (let i = 0; i < width; ++i) {
            for (let j = 0; j < height; ++j) {
                const aliveNeighbors = this.getNumberOfAliveNeighbors(grid, i, j);
                let cell = grid[i][j];
                if (cell === 'dead' && aliveNeighbors === 3) {
                    newGrid[i][j] = 'alive';
                    ++aliveCells;
                } else if (cell === 'alive' && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
                    newGrid[i][j] = 'dead';
                } else {
                    newGrid[i][j] = cell;
                    if (cell === 'alive')
                        ++aliveCells;
                }
            }
        }
        const gameState: GameState = aliveCells === 0 ? 'finish' : 'active';
        const resposne: GameResponse = {
            grid: newGrid,
            gameState,
        };
        return resposne;
    }

    static getNumberOfAliveNeighbors(grid: Grid, i: number, j: number): number {
        const [width, height] = this.getDimensions(grid);
        const minX = Math.max(i - 1, 0);
        const maxX = Math.min(width - 1, i + 1);
        const minY = Math.max(j - 1, 0);
        const maxY = Math.min(height - 1, j + 1);

        let alive = 0;

        for (let x = minX; x <= maxX; ++x) {
            for (let y = minY; y <= maxY; ++y) {
                const cell = grid[x][y];
                if (cell === 'alive') ++alive;
            }
        }
        if (grid[i][j] === 'alive') --alive; // Do not count the cell that is being tested

        return alive;
    }

    static getDimensions(grid: Grid) {
        if (!grid) return [0, 0];
        const width = grid.length;
        if (!grid[0]) return [width, 0];
        const height = grid[0].length;
        return [width, height];
    }

    static print(grid: Grid) {
        console.log('-------------\nstart\n------------');
        const [width, height] = this.getDimensions(grid);
        for (let i = 0; i < width; ++i) {
            for (let j = 0; j < height; ++j) {
                const c = grid[i][j] === 'alive' ? '*' : '.';
                process.stdout.write(c);
            }
            process.stdout.write("\n");
        }
        console.log('-------------\nfinish\n------------');
    }

}

export default LifeGame;