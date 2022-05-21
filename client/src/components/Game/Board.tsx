import React from 'react';
import styled from 'styled-components';
import GameGrid from './GameGrid';
import { Grid } from '../../types/game';

const Board = ({
    grid,
    onCellClick,
    isSelectingElements,
}: {
    grid: Grid,
    onCellClick: (row: number, cell: number) => void,
    isSelectingElements: boolean,
}) => {
    return (
        <GameUI>
            <GameGrid grid={grid} onCellClick={onCellClick} isSelectingElements={isSelectingElements} />
        </GameUI>
    );
}

export default Board;

const GameUI = styled.div``;