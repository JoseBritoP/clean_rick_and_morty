import { Request,Response } from "express";

// Controllers

import { createNewUser,loginUser } from "../controllers/users";

// Handlers

export const userRegister = async (req:Request,res:Response) => {
  const {email,password} = req.body
  try {
    const newUser = await createNewUser(email,password);
    return res.status(201).json(newUser)
  } catch (error:any) {
    return res.status(409).json({error: error.message})
  }
  // return res.status(201).json({DIY:'The user has successfully register'})
};

export const userLogin = async (req:Request,res:Response) => {
  const {email,password} = req.body
  try {
    const userLogged = await loginUser({email,password})
    return res.status(200).json({message:'User logged successfully'})
  } catch (error:any) {
    return res.status(409).json({error: error.message})
  }
  // return res.status(201).json({DIY:'The user has successfully login'})
};