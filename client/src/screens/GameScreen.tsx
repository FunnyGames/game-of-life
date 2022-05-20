import React from 'react';
import styled from 'styled-components';

import Board from '../components/Game/Board';
import { Grid } from '../types/game';

const GameScreen = () => {
    const grid: Grid = new Array(50);

    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(50).fill('dead');
    }

    return (
        <Screen>
            <GameTitle>Game of Life</GameTitle>
            <Board grid={grid} />
        </Screen>
    );
}

export default GameScreen;

const Screen = styled.div`
    font: 
`;

const GameTitle = styled.div`
    text-align: center;
    font-family: Kanit;
`;