import axios from '@utils/customAxios';
import {UserSignInInfo, UserInfo} from "@type/UserInfo";
export function signUp({email, password, name, phoneNumber, nickName, introduce, walletPassword}: UserInfo) {
    return axios.post('/tayo/auth/join', {
        email,
        password,
        name,
        phoneNumber,
        nickName,
        introduce,
        walletPassword
    });
}
export function signIn({email, password}: UserSignInInfo) {
    return axios.post('/tayo/auth/login', {
        email,
        password
    })
}