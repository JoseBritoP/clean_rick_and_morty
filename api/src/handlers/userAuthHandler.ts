import { Request,Response } from "express";

// Controllers

import { createNewUser,loginUser } from "../controllers/users";

// Handlers

export const userRegister = async (req:Request,res:Response) => {
  const {email,password} = req.body
  try {
    const newUser = await createNewUser(email,password);
    if(newUser) throw Error(`Checkout your credentials`)
    return res.status(201).json({message:'User register successfully'})
  } catch (error:any) {
    return res.status(409).json({error: error.message})
  }
};

export const userLogin = async (req:Request,res:Response) => {
  const {email,password} = req.body
  try {
    const userLogged = await loginUser({email,password})
    // return res.status(200).json(userLogged)
    if(!userLogged) throw Error(`Credentials incorrect`);
    return res.status(200).json({message:'User logged successfully'})
  } catch (error:any) {
    return res.status(409).json({error: error.message})
  }
};