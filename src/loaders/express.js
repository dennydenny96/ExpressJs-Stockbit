import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import routes from '../routes';

export default async ({ app }) => {
  // Settings
  app.enable('trust proxy');

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(morgan('tiny'));

  // Static files
  app.use(express.static(path.join(__dirname, '../static')));

  // Routes
  app.use('/', routes.omdbapi);
  app.get('/', routes.main.root);
  app.use(routes.main.notFound);
  app.use(routes.main.errorHandler);
  
  return app;
};
