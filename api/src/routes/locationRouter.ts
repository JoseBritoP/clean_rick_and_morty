import {Response,Request,Router } from 'express';

export const locationRouter = Router();

// Handlers:

import { getLocations,getLocation, postLocation,updateLocation,deleteLocation } from '../handlers/locationsHandler';

//Middlewares:

import { postValidate } from '../middleware/location/postValidate';

// Enrutado

locationRouter.get('/',getLocations);
locationRouter.get('/:id',getLocation);
locationRouter.post('/',postValidate,postLocation);
locationRouter.patch('/:id',updateLocation);
locationRouter.delete('/:id',deleteLocation);