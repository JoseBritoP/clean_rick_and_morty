// Dev
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
// Router
import { router } from './routes';

// Server

export const server = express();
server.disable('x-powered-by');
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
// Conection
server.use('/',router)