const path = require('path');
const dotenv = require('dotenv');

let envName = '';

switch (process.env.NODE_ENV) {
  case 'production':
    envName = '.production.env';
    break;
  case 'development':
    envName = '.development.env';
    break;
  case 'test':
    envName = '.test.env';
    break;
  default:
    console.log(`❌ No have this name env ::: ${process.env.NODE_ENV}`);
  }

dotenv.config({
  path: path.join(__dirname, '../env/', envName),
});