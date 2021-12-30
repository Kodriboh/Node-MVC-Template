'use strict';

import { Router } from "express";

import * as messagesController from '../controllers/messages.controller.mjs';

const router = Router();

router.route('/')
    .get(messagesController.getMessages)
    .post(messagesController.postMessage);

export default router; 