import httpContext from 'express-http-context';
import express, { Application, Request, Response, NextFunction } from 'express';
import morganMiddleware from '../common/morgan';
import cors from 'cors';
import compression from 'compression';
import routes from '../routes';
import { requestId } from '../middlewares/request-id';
import env from '../environments/env';

export const configureExpress = (app: Application) => {
    const originRegex = new RegExp(env.origins);
    app.use(cors({
        origin: originRegex,
        credentials: false,
    }));
    app.use(morganMiddleware);
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(httpContext.middleware);
    app.use(compression());
    app.use(requestId);
}

export const configureRoutes = (app: Application) => {
    app.use('/', routes);

    // 404
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.status(404).send({ error: 'API not found' });
    });
}