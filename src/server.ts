import * as dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';

dotenv.config();

const { SERVER_PORT, SERVER_DOMAIN } = process.env;

if (SERVER_PORT === undefined || SERVER_DOMAIN === undefined) {
  throw new Error('Pleise define constants in .env file');
}

const server = express();

server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());

const movies = [
  { id: 1, title: 'movie1' },
  { id: 2, title: 'movie2' },
  { id: 3, title: 'movie3' },
  { id: 4, title: 'movie4' },
];

const apiRouter = express.Router();
server.use('/api', apiRouter);

apiRouter.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

apiRouter.post('/movies', (req, res) => {
  const { body } = req;
  const newMovie = { id: 5, title: body.title };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

server.listen(SERVER_PORT, () => {
  console.log(`server is running on: http://${SERVER_DOMAIN}:${SERVER_PORT}`);
});
