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