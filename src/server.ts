import morgan from 'morgan';
import express from 'express';
import auth from './controllers/movies-controller/auth';
import config from './config';
import moviesRouter from './controllers/movies-controller';
import { connectMySql } from './services/my-sql';

const server = express();

server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());
server.use('/api/movies', moviesRouter);
server.use('/api/auth/', auth);

connectMySql(() => {
  server.listen(config.server.port, () => {
    console.log(`server is running on: http://${config.server.domain}:${config.server.port}`);
  });
});
