'use strict';

import * as model from '../models/friends.model.mjs';

export function getFriends(req, res) {
    res.send(JSON.stringify(model['friends']));
};

export function addFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name',
        });
    };

    if (model.friends.find(friend => friend.name === req.body.name)) {
        return res.status(409).json({
            error: 'Friend already exists!',
        });
    };

    const newFriend = {
        name: req.body.name,
        id: model.friends.length
    };

    model.friends.push(newFriend);

    return res.status(201).json(newFriend);
};

export async function showFriend(req, res) {
    const friend = 
        await model.friends.find(
            friend => friend.id === parseInt(req.params.id)
        );

    if (!friend) {
        return res.status(404).json({
            error: 'Friend not found!',
        });
    };

    return res.status(200).json(friend);
};