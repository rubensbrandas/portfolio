const { createRequestHandler } = require('@remix-run/vercel');

module.exports = createRequestHandler({
  build: require('../../build'), // ou './build' se estiver na raiz
  mode: process.env.NODE_ENV,
});
