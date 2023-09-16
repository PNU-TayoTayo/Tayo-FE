import exp from "constants";

export interface UserSignUpInfo {
    email: string,
    password: string,
    passwordConfirm: string,
    name: string,
    nickName: string,
    phoneNumber: string,
    introduce: string,
    walletPassword: string,
}
export interface UserLoginInfo{
    email: string,
    password: string,
}
