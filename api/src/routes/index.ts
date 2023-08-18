import {Response,Request,Router, NextFunction } from 'express';
// Importamos los routers 

// Router:

export const router = Router();

// Conection - Router-Endpoints

import { characterRouter } from './charactersRouter';
import { locationRouter } from './locationRouter';
import { episodeRouter } from './episodeRouter';

// Endpoints

router.use('/character',characterRouter);
router.use('/episode',episodeRouter);
router.use('/location',locationRouter);

// Rutas no implementadas:
router.use((req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error(`La ruta ${req.originalUrl} con el método ${req.method} no está implementada`);
  error.status = 404;
  next(error);
});

router.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500).json({
    message: error.message || 'Error interno del servidor'
  });
});

// Documentación API
router.use('/',(req:Request,res:Response)=>{
  res.json({DIY:'Ruta general'})
});