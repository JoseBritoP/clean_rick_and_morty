import { Router } from 'express';

export const userAuthRouter = Router();

// Handlers:

import { userRegister,userLogin,userBanned } from '../handlers/userAuthHandler';

//Middlewares:

import { logMiddleware } from '../middleware/user/logMiddleware';
import { auth } from '../middleware/user/newUser';
import { checkBanned } from '../middleware/user/checkBanned';

// Enrutado

userAuthRouter.post('/register',auth,userRegister);
userAuthRouter.post('/login',auth,checkBanned,userLogin);
userAuthRouter.delete('/banned/:id',userBanned)