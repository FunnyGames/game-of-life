import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { initNewGameGrid, toggleCell } from '../common/game';
import Board from '../components/Game/Board';
import { GameState, Grid } from '../types/game';
import ControlButtons from '../components/Game/ControlButtons';
import GameStatistics from '../components/Game/GameStatistics';
import Popup from '../components/Popup';
import * as gameApi from '../api/api';

const GameScreen = () => {
    const [grid, setGrid] = useState<Grid>(initNewGameGrid());
    const [isSelectingElements, setIsSelectingElements] = useState(true);
    const [step, setStep] = useState(0);
    const [simulationRunning, setSimulationRunning] = useState(false);
    const [gameState, setGameState] = useState<GameState>('active');
    const [showPopup, setShowPopup] = useState(false);

    const nextStepMutation = useMutation(gameApi.nextStep);

    useEffect(() => {
        const timer = setTimeout(() => simulationRunning && playOneStep(), 400);
        return () => clearTimeout(timer);
    });

    const onCellClick = (row: number, cell: number) => {
        if (!isSelectingElements) return;

        const newGrid = toggleCell(grid, row, cell);
        setGrid(newGrid);
    }

    const playOneStep = () => {
        if (gameState === 'finish') return;
        if (isSelectingElements) setIsSelectingElements(false);

        nextStepMutation.mutate(grid, {
            onSuccess: ({ data }) => {
                setStep(step + 1);
                setGrid(data.grid);
                setGameState(data.gameState);
                if (data.gameState === 'finish') {
                    setShowPopup(true);
                    if (simulationRunning) {
                        stopSimulation();
                    }
                }
            }
        });
    }

    const startSimulation = () => {
        if (gameState === 'finish') return;
        setSimulationRunning(true);
    }

    const stopSimulation = () => {
        if (gameState === 'finish') return;
        setSimulationRunning(false);
    }

    const resetSimulation = () => {
        if (simulationRunning) return;

        const grid = initNewGameGrid();
        setGrid(grid);
        setStep(0);
        setIsSelectingElements(true);
        setGameState('active');
        setShowPopup(false);
    }

    return (
        <Screen>
            <GameTitle>Game of Life</GameTitle>
            <Popup
                show={showPopup}
                onPress={() => setShowPopup(false)}
                text="There are no more alive cells."
            />
            <Menu>
                <GameStatistics step={step} gameState={gameState} />
                <ControlButtons
                    playOneStep={playOneStep}
                    startSimulation={startSimulation}
                    stopSimulation={stopSimulation}
                    resetSimulation={resetSimulation}
                    gameState={gameState}
                    simulationRunning={simulationRunning}
                />
            </Menu>
            <Board grid={grid} onCellClick={onCellClick} isSelectingElements={isSelectingElements} />
        </Screen>
    );
}

export default GameScreen;

const Screen = styled.div`
    text-align: center;
`;

const GameTitle = styled.div`
    text-align: center;
    font-size: xxx-large;
    color: #fff;
`;

const Menu = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    background: #394264;
    border-radius: 5px;
    height: 80px;
    width: 760px;
    margin: auto auto 10px auto;
`;