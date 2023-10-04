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
    return axios.post('/tayo/car/getvc',{walletPassword},{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }}
    );
}
export function registerCar({walletPassword, referentVC, location, sharingPrice, timeList}: RegisterCar) {
    return axios.post('/tayo/car/create',{
        walletPassword,
        referentVC,
        location,
        sharingPrice,
        timeList
        },{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }}
    );
}