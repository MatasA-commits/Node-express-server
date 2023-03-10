import express from 'express';
import { login } from './login';
import { register } from './register';
import authMiddleware from '../middlewares/auth-middlewares';
import { auth } from './auth';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/auth', authMiddleware, auth);

export default router;
