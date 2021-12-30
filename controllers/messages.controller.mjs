'use strict';

import * as path from 'path';

import * as model from "../models/messages.model.mjs";

const __dirname = path.join(path.dirname(decodeURI(new URL(import.meta.url).pathname))).replace(/^\\([A-Z]:\\)/, "$1");

export function getMessages (req, res) {
    // res.send(JSON.stringify(model['messages']));
    const filePath = path.join(__dirname, '..', 'public', 'images', 'yugi.png');
    res.sendFile(filePath);
};

export function postMessage(req, res) {
    if (!req.body.content) {
        return res.status(400).JSON({
            error: 'No message body to save!',
        });
    };

    const newMessage = {
        id: model.messages.length,
        content: req.body.content,
    };

    model.messages.push(newMessage);

    return res.status(201).json(newMessage);
};

