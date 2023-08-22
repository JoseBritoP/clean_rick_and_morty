export type UserId = `${string}-${string}-${string}-${string}`
export type UserTokenInit = "eyJhbGciOiJIUzI1NiJ9"
export type UserToken =  `${UserTokenInit}.${string}.${string}_${string}`
// "eyJhbGciOiJIUzI1NiJ9.OTlkMGFkMDYtODdkYS00ZmZkLWE4YTctNmJmZGZjODM1MGE2.Q8PC7m3nSvWyEZHlrjEoNueL9rUkr_1t4IoxiCH5JM0",
// "eyJhbGciOiJIUzI1NiJ9.ZDVhMzg0OTktYTBkNC00ZTE0LWIyMjUtMzU3NWNhMDEyZDk1.CFnCI53pLDmYtXseeVhN4696dctsP_T6E5PIe-ADUpM",

export interface UserModel {
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