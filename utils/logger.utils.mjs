'use strict';

export function logIp(req, res, next) {
    console.log('ip addressL', req.ip);
    next();
};

export function logRequest(req, res, next) {
    const start = Date.now();
    next();

    const delta = Date.now() - start; 

    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
};