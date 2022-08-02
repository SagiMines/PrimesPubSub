import { start } from './src/app.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();
const result = prompt('Please enter the limit you want: ');
start(Number(result));
