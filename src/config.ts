import * as dotenv from 'dotenv';

dotenv.config();

const { SERVER_PORT, SERVER_DOMAIN } = process.env;

if (SERVER_PORT === undefined || SERVER_DOMAIN === undefined) {
  throw new Error('Pleise define constants in .env file');
}

const config = {
  server: {
    domain: SERVER_DOMAIN,
    port: SERVER_PORT,
  },
};

export default config;
