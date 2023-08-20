import { Router } from 'express';

export const userAuthRouter = Router();

// Handlers:

import { userRegister,userLogin } from '../handlers/userAuthHandler';

//Middlewares:

import { logMiddleware } from '../middleware/user/logMiddleware';
import { auth } from '../middleware/user/newUser';

// Enrutado

userAuthRouter.post('/register',auth,userRegister);
userAuthRouter.post('/login',auth,userLogin);