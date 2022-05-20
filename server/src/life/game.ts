import { Board, GameState, CellState } from './type';

class LifeGame {
    id: string;
    state: GameState;
    board: Board;

    constructor(id: string, board: Board) {
        this.id = id;
        this.board = board;
        this.state = 'active';
    }

    playNextMove() {
        if (this.isBoardFinished()) return false;
        const { width, height, grid } = this.board;
        const newGrid: CellState[][] = [];
        let aliveCells = 0;
        for (let i = 0; i < width; ++i) {
            let row: CellState[] = [];
            for (let j = 0; j < height; ++j) {
                const aliveNeighbors = this.getNumberOfAliveNeighbors(i, j);
                let cell = grid[i][j];
                if (this.isCellDead(cell) && aliveNeighbors === 3) {
                    row.push('alive');
                    ++aliveCells;
                } else if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                    row.push('dead');
                } else {
                    row.push(cell);
                    if (cell === 'alive')
                        ++aliveCells;
                }
            }
            newGrid.push(row);
        }
        this.board.grid = newGrid;
        if (aliveCells === 0) {
            this.state = 'finish';
        }
        return true;
    }

    isBoardActive(): boolean {
        return this.state === 'active';
    }

    isBoardFinished(): boolean {
        return this.state === 'finish';
    }

    isCellAlive(cell: CellState): boolean {
        return cell === 'alive';
    }

    isCellDead(cell: CellState): boolean {
        return cell === 'dead';
    }

    getNumberOfAliveNeighbors(i: number, j: number): number {
        const { width, height, grid } = this.board;
        const minX = Math.max(i - 1, 0);
        const maxX = Math.min(width - 1, i + 1);
        const minY = Math.max(j - 1, 0);
        const maxY = Math.min(height - 1, j + 1);

        let alive = 0;

        for (let x = minX; x < maxX; ++x) {
            for (let y = minY; y < maxY; ++y) {
                if (x === i && y === j) continue;
                const cell = grid[x][y];
                if (this.isCellAlive(cell)) ++alive;
            }
        }

        return alive;
    }

    reset() {
        const { width, height, grid } = this.board;
        for (let i = 0; i < width; ++i) {
            for (let j = 0; j < height; ++j) {
                grid[i][j] = 'dead';
            }
        }
    }

}

export default LifeGame;