import httpContext from 'express-http-context';
import express, { Application } from 'express';
import morganMiddleware from '../common/morgan';
import cors from 'cors';
import compression from 'compression';
import routes from '../routes';
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
}

export const configureRoutes = (app: Application) => {
    app.use('/', routes);
}