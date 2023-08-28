import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

import { JWT_SECRET } from './../config.js'

export const createToken = (data) => {
  return jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });
};

export const authenticate = expressJwt({ secret: JWT_SECRET, algorithms: ['HS256'] });

export default {
  createToken,
  authenticate,
};