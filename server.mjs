'use strict';

import express from 'express';
import bodyParser from 'body-parser';

import helloRouter from './routes/hello.router.mjs';
import friendsRouter from './routes/friends.router.mjs';
import messagesRouter from './routes/messages.router.mjs';

import { logRequest as requestLogger } from './utils/logger.utils.mjs';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(requestLogger);

app.use('/hello', helloRouter);
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});