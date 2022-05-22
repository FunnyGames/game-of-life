import React from 'react';
import styled from 'styled-components';

const GameStatistics = ({ step, gameState }: { step: number, gameState: string }) => {
    return (
        <View>
            <InfoView>Steps: {step}</InfoView>
            <InfoView>State: {gameState}</InfoView>
        </View>
    );
}

export default GameStatistics;

const View = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
`;

const InfoView = styled.p`
    margin-right: 30px;
    font-weight: 500;
`;