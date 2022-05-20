import { Response, NextFunction } from 'express';
import { ObjectSchema } from '@hapi/joi';
import createLogger from '../common/logger';
const logger = createLogger(__filename);

export const validate = (schmea: ObjectSchema, obj: any, res: Response, next: NextFunction) => {
    const value = schmea.validate(obj, { abortEarly: false });
    if (value.error) {
        logger.error(value.error.message);
        res.status(400).send({ error: value.error.message });
        return;
    }
    next();
}