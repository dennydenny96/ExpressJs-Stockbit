import express from 'express';
import loaders from './loaders';
import { createServer } from "http";

const startServer = async () => {
  const app = express();

  await loaders.init({ expressApp: app });

  const server = createServer(app);

  server.listen(process.env.PORT);

  server.on('listening', () => {
    console.log(`Backend Listening on port:: http://localhost:${process.env.PORT}/`);
  });
  return app;
};

startServer();

