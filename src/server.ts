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

server.listen(SERVER_PORT, () => {
  console.log(`server is running on: http://${SERVER_DOMAIN}:${SERVER_PORT}`);
});