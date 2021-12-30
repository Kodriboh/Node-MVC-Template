'use strict';

import { Router } from 'express';

import * as friendsController  from '../controllers/friends.controller.mjs';
import { logIp as ipLogger } from '../utils/logger.utils.mjs';

const router = Router();

router.use(ipLogger);

router.route('/')
    .get(friendsController.getFriends)
    .post(friendsController.addFriend);

router.route('/:id')
    .get(friendsController.showFriend);

export default router;
