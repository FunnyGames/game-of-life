import express from 'express';
import * as config from './config/config';
import createLogger from './common/logger';
import env from './environments/env';
const logger = createLogger(__filename);

const server = async () => {
    logger.info(`Starting server...`);
    const app = express();
    config.configureExpress(app);
    config.configureRoutes(app);
    const port = env.port;

    const server = app.listen(port, () => {
        logger.info(`Listening on port ${port}`);
    });

    const signals = {
        'SIGHUP': 1,
        'SIGINT': 2,
        'SIGTERM': 15,
    };

    // Shutdown server by signal
    const shutdown = (signal: string, value: number) => {
        server.close(() => {
            logger.error(`Server was stopped by ${signal} with value ${value}`);
            process.exit(128 + value);
        });
    }

    // Create a listener for each of the signals
    Object.keys(signals).forEach((signal: string) => {
        process.on(signal, () => {
            shutdown(signal, signals[signal]);
        });
    });
}

export default server;