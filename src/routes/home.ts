import {
    Response,
    Request,
    Express,
    Router,
} from 'express';

import * as HomeC from '../controllers/HomeController';

const router = Router();

router.get('/', HomeC.getIndex);

export default router;