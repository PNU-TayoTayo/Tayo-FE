export interface UserInfo {
    email: string,
    password: string,
    name: string,
    nickName: string,
    phoneNumber: string,
    introduce: string,
    walletPassword: string,
}
export interface UserSignUpClientInfo extends UserInfo {
    passwordConfirm: string
}
export interface UserSignInInfo {
    email: string,
    password: string,
}
export interface MyPageInfo {
    email: string,
    name: string,
    nickName: string,
    phoneNumber: string,
    introduce: string,
}
export interface NewPassword {
    currentPassword: string;
    newPassword: string;
    checkNewPassword: string;
}