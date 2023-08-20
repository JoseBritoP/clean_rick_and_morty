import { Router } from 'express';

export const userAuthRouter = Router();

// Handlers:

import { userRegister,userLogin } from '../handlers/userAuthHandler';

//Middlewares:

import { logMiddleware } from '../middleware/user/logMiddleware';
import { newUser } from '../middleware/user/newUser';

// Enrutado

userAuthRouter.post('/register',newUser,userRegister);
userAuthRouter.post('/login',userLogin);