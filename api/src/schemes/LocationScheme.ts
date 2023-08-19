import z from 'zod';
import { LocationType } from '../interfaces/location';

const locationScheme = z.object({
  name: z.string({
    invalid_type_error:'Location name must be a string',
    required_error: 'Location name is required'
  }),
  type: z.string({
    invalid_type_error:"Location Type must be a String",
    required_error : "Location Type Required"
  }),
  dimension: z.string({
    invalid_type_error :"Dimension of the location must be a number or null ",
    required_error  : "Dimension Of The Location Is Required"
  })
})

export const validateLocation = (object:LocationType) => {
  return locationScheme.safeParseAsync(object) 
};

export const validateParcialLocation = (object: LocationType) => {
  return locationScheme.partial().safeParseAsync(object) 
};