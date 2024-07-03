import express from 'express';
import path from 'path';

import { createPage } from './src/template';
import { ssr } from './src/server';
import data from './assets/data.json';

const app = express();

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// Hide powered by express
app.disable('x-powered-by');
// Start the server
app.listen(process.env.PORT || 3000);

const initialState = {
  isFetching: false,
  apps: data
}

// Server rendered home page
app.get('/', (_req, res) => {
  const { preloadedState, content } = ssr(initialState);
  const page = createPage({
    title: "Server Rendered Page",
    initialState: preloadedState,
    content,
  });
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(page);
});

// Pure client side rendered page
app.get('/client', (_req, res) => {
  const page = createPage({ title: 'Client Side Rendered page' });
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(page);
});
