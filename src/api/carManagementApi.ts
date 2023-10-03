import axios from "@utils/customAxios";

export function issueVC({carNumber, walletPassword}: {carNumber: string, walletPassword: string}) {
    return axios.post('/tayo/car/vc',{
        carNumber,
        walletPassword
    },{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}
export function getVCList({walletPassword}: {walletPassword: string}) {
    return axios.get('/tayo/car/vc',{
        data: {
            walletPassword
        },
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}