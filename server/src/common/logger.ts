import { createLogger, format, transports } from 'winston';
import path from 'path';
import httpContext from 'express-http-context';
import env from '../environments/env';

const { combine, timestamp, printf } = format;

const serverFormat = printf(({ level, message, label, requestId, timestamp }) => {
    if (requestId) {
        return `${timestamp} [${label}] {${requestId}} - ${level}: ${message}`;
    }
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const transporters = [new transports.Console(
    {
        format: combine(
            format.colorize(),
            timestamp(),
            serverFormat,
        ),
        level: env.env === 'prod' ? 'error' : 'debug',
    }
)];

const addRequestInfo = format((info: any) => {
    let requestId = httpContext.get('requestId');
    if (requestId) {
        info.requestId = requestId;
    }
    return info;
});

function logger(filename: string) {
    const log = createLogger({
        level: 'info',
        format: combine(
            addRequestInfo(),
            format.label({ label: path.basename(filename) }),
            timestamp(),
            format.json(),
        ),
        transports: transporters,
        exceptionHandlers: [
            ...transporters,
        ],
    });
    return log;
}

export default logger;