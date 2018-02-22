import {
    Response,
    Request,
    NextFunction,  
} from 'express';

import User from '../models/User';

export const getIndex = (req: Request, res: Response, next: NextFunction) => {
    const aUser = new User('Monsoir');
    res.json( aUser.name + ' is OK');
};