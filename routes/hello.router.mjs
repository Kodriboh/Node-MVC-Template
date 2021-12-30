'use strict';

import { Router } from 'express';

import * as helloController from '../controllers/hello.controller.mjs';

const router = Router();

router.route('/')
    .get(helloController.helloWorld);

export default router;