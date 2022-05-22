import React from 'react';
import styled from 'styled-components';
import { GameState } from '../../types/game';

const ControlButtons = ({
    playOneStep,
    startSimulation,
    stopSimulation,
    resetSimulation,
    simulationRunning,
    gameState,
}: {
    playOneStep: () => void,
    startSimulation: () => void,
    stopSimulation: () => void,
    resetSimulation: () => void,
    simulationRunning: boolean,
    gameState: GameState,
}) => {
    const gameEnded = gameState === 'finish';
    return (
        <ButtonList>
            <Button onClick={playOneStep} disabled={simulationRunning || gameEnded}>Next</Button>
            <Button onClick={startSimulation} disabled={simulationRunning || gameEnded}>Start</Button>
            <Button onClick={stopSimulation} disabled={!simulationRunning || gameEnded}>Stop</Button>
            <Button onClick={resetSimulation} disabled={simulationRunning}>Reset</Button>
        </ButtonList>
    );
}

export default ControlButtons;

const ButtonList = styled.div`
    align-self: center;
    font-family: 'Ubuntu', sans-serif;
`;

const Button = styled.button`
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    background-image: ${props => props.disabled ? 'linear-gradient(195deg,#87bfef,#a3c3ed)' : 'linear-gradient(195deg,#49a3f1,#1a73e8)'};
    color: #fff;
    border: 0;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 0.5rem;
    padding: 0.625rem 1.5rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 1rem;
    
`;