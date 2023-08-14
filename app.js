// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import homeRouter from './src/routes/homeRouters';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.rotes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  rotes() {
    this.app.use('/', homeRouter);
  }
}

export default new App().app;
