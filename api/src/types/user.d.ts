export type UserId = `${string}-${string}-${string}-${string}`

export interface User {
  id: UserId,
  email:string,
  password?: string,
};

export type UserType = {
  email:string,
  password: string,
}

export type UserCredentials = {
  id:UserId,
  email: string
}

export type UserTest = {
  token: string,
  user: UserCredentials
};