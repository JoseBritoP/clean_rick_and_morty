import { Request,Response } from "express";

// Controllers

import { createNewUser,loginUser,banUser } from "../controllers/users";

// Handlers

export const userRegister = async (req:Request,res:Response) => {
  const {email,password} = req.body
  try {
    const newUser = await createNewUser(email,password);
    if(!newUser) throw Error(`Checkout your credentials`)
    return res.status(201).json({message:'User register successfully'})
  } catch (error:any) {
    return res.status(400).json({error: error.message})
  }
};

export const userLogin = async (req:Request,res:Response) => {
  const {email,password} = req.body
  try {
    const userLogged = await loginUser({email,password})
    // return res.status(200).json(userLogged)
    if(!userLogged) throw Error(`Credentials incorrect`);
    // return res.status(200).json({message:'User logged successfully'})
    return res.status(200).json(userLogged)
  } catch (error:any) {
    return res.status(400).json({error: error.message})
  }
};

export const userBanned = async (req:Request,res:Response) => {
  const {id} = req.params
  try {
    const user = await banUser(+id);
    return res.status(200).json({message:user});
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
};