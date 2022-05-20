import morgan, { StreamOptions } from 'morgan';
import Logger from './logger';
import env from '../environments/env';

const stream: StreamOptions = {
    write: message => Logger('morgan').http(message),
}

const skip = () => {
    return env.env !== 'dev';
}

const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    { stream, skip },
);

export default morganMiddleware;