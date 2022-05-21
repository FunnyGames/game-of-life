import React from 'react';
import styled from 'styled-components';

const ControlButtons = ({
    playOneStep,
    startSimulation,
    stopSimulation,
    resetSimulation,
    simulationRunning,
}: {
    playOneStep: () => void,
    startSimulation: () => void,
    stopSimulation: () => void,
    resetSimulation: () => void,
    simulationRunning: boolean,
}) => {
    return (
        <ButtonList>
            <Button onClick={playOneStep} disabled={simulationRunning}>Next</Button>
            <Button onClick={startSimulation} disabled={simulationRunning}>Start</Button>
            <Button onClick={stopSimulation} disabled={!simulationRunning}>Stop</Button>
            <Button onClick={resetSimulation} disabled={simulationRunning}>Reset</Button>
        </ButtonList>
    );
}

export default ControlButtons;

const ButtonList = styled.div``;

const Button = styled.button``;