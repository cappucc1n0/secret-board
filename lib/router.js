'use strict';
const postsHandler = require('./posts-handler.js');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    default:
      break;
  }
}

module.exports = {
  route
};