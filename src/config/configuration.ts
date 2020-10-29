import * as dotenv  from 'dotenv';
const envVars = require('dotenv').config();
// import { config } from 'dotenv';

console.log('Inside config');
console.log(dotenv);

const config = envVars;

export default config;