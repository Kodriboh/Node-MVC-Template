'use strict';

import * as model from "../models/messages.model.mjs";

export function getMessages (req, res) {
    res.send(JSON.stringify(model['messages']));
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

