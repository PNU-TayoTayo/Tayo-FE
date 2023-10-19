import {atom} from "recoil";
import { recoilPersist } from 'recoil-persist';
interface User{
    name: string,
    nickName: string,
    id: number,
}
const { persistAtom } = recoilPersist();
export const userAtom = atom<User>({
    key: 'userInfo',
    default: { name: "", nickName: "", id: 0},
    effects_UNSTABLE: [persistAtom],
});

export const isLoggedInAtom = atom<boolean>({
    key: "isLoggedIn",
    default: !!localStorage.getItem("accessToken"),
});