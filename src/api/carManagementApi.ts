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
export function registerCar({walletPassword, referentVC, location, sharingPrice, timeList}) {
    const locationForm = {
        sharingLocation: location,
        sharingLocationAddress: location,
        sharingLatitude: '35.23258237080505',
        sharingLongitude: '129.0828602625644'
    }
    const data = {
        walletPassword,
        referentVC,
        location: locationForm,
        sharingPrice,
        dataList: [timeList],
    }
    const form = new FormData();
    const blob = new Blob([JSON.stringify(data)], {
        type: 'application/json',
    });
    form.append('request', blob)
    return axios.post('/tayo/car/create',form,{
        headers: {
            'Content-Type': 'multipart/form-data', // Content-Type 설정
            Authorization: localStorage.getItem('accessToken'),
        }}
    );
}
export function queryOwner() {
    return axios.get('/tayo/car/queryowner',{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}