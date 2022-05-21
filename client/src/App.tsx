import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from './components/ErrorBoundary';
import GameScreen from './screens/GameScreen';

const queryClient = new QueryClient();

function App() {
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <GameScreen />
            </QueryClientProvider>
        </ErrorBoundary>
    );
}

export default App;
