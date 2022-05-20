import React, { useState } from 'react';
import styled from 'styled-components';
import GameGrid from './GameGrid';
import { Grid } from '../../types/game';

const Board = ({ grid: initialGrid }: { grid: Grid }) => {
    const [grid, setGrid] = useState<Grid>(initialGrid);

    const onCellClick = (row: number, cell: number) => {
        const next = grid[row][cell] === 'dead' ? 'alive' : 'dead';
        const newGrid: Grid = [...grid];
        newGrid[row][cell] = next;
        setGrid(newGrid);
    }

    return (
        <GameUI>
            <GameGrid grid={grid} onCellClick={onCellClick} />
        </GameUI>
    );
}

export default Board;

const GameUI = styled.div``;