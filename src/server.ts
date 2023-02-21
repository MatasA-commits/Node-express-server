import morgan from 'morgan';
import express from 'express';
import config from './config';
import moviesRouter from './routers/movies-router';

const server = express();

server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());

server.use('/api/movies', moviesRouter);

server.listen(config.server.port, () => {
  console.log(`server is running on: http://${config.server.domain}:${config.server.port}`);
});
