import React from 'react';
import styled from 'styled-components';
import { CellState, Grid } from '../../types/game';

interface IProps {
    state: CellState;
    isSelectingElements: boolean;
}

const GameGrid = ({
    grid,
    onCellClick,
    isSelectingElements,
}: {
    grid: Grid,
    onCellClick: (index: number, cellIndex: number) => void,
    isSelectingElements: boolean,
}) => {
    const gridElements = grid.map((row, index) => {
        return (
            <Row key={`${row}-${index}`}>
                {
                    row.map((cell, cellIndex) =>
                        <Cell
                            key={`${row}-${index}-${cell}-${cellIndex}`}
                            state={cell}
                            onClick={() => onCellClick(index, cellIndex)}
                            isSelectingElements={isSelectingElements}
                        />
                    )
                }
            </Row>
        )
    }
    );

    return <GameUI>
        {gridElements}
    </GameUI>
}

export default GameGrid;

const GameUI = styled.div``;

const Row = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Cell = styled.span<IProps>`
    background-color: ${props => props.state === 'dead' ? 'lightgray' : 'black'};
    width: 1.5vh;
    height: 1.5vh;
    display: flex;
    cursor: ${props => props.isSelectingElements ? 'pointer' : 'normal'};
    margin: 0.5px;
    border-radius: 3px;
`;