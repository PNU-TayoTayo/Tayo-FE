import {atom} from "recoil";
import {UserSignInInfo} from "@type/UserSignUpInfo";
interface User{
    email: string,
    name: string,
    nickName: string,
    phoneNumber: string,
    introduce: string,
    accessToken: string,
}
export const userAtom = atom<User>({
    key: 'userInfo',
    default: { email: "", name: "", nickName: "", phoneNumber: "", introduce: "", accessToken: ""},
});

export const isLoggedInAtom = atom<boolean>({
    key: "isLoggedIn",
    default: !!localStorage.getItem("accessToken"),
});