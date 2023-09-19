export interface UserSignUpInfo {
    email: string,
    password: string,
    name: string,
    nickName: string,
    phoneNumber: string,
    introduce: string,
    walletPassword: string,
}
export interface UserSignUpClientInfo extends UserSignUpInfo {
    passwordConfirm: string
}
export interface UserSignInInfo {
    email: string,
    password: string,
}
