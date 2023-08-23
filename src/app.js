import express from 'express';
import morgan from 'morgan';

import { PORT } from './config.js';

import categoryRoutes from './routes/categoryRoutes.js';
import licenceRoutes from './routes/licenceRoutes.js';
import productRoutes from './routes/productRoutes.js';


const app = express();

//Settings
app.set('port', PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/licences', licenceRoutes);

export default app;