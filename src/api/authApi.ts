import axios from '@utils/customAxios';
import {UserSignUpInfo} from "@type/UserSignUpInfo";
export function signUp({email, password, name, phoneNumber, nickName, introduce, walletPassword}:UserSignUpInfo) {
    return axios.post('/tayo/auth/join', {params: {
        email,
        password,
        name,
        phoneNumber,
        nickName,
        introduce,
        walletPassword
        }})
}
export function signIn({email, password}: {email: string, password: string}) {
    return axios.post('/tayo/auth/login', {params: {
        email,
        password
        }})
}