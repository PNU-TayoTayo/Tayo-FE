import axios from "@utils/customAxios";

export function searchCarList({leftLatitude, leftLongitude, rightLatitude, rightLongitude, date}: mapSearch) {
    return axios.get('/tayo/car/search',{
        params: {
            leftLatitude,
            leftLongitude,
            rightLatitude,
            rightLongitude,
            date,
        },
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}
export function getCarDetail({carId}) {
    return axios.get(`tayo/car/detail/${carId}`,{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    })
}

export function applyCar({carID, lenderID, sharingPrice, sharingDate, sharingLocation, sharingStatus}) {
    return axios.post(`/tayo/car/detail`,{
        carID,
        lenderID,
        sharingPrice,
        sharingDate,
        sharingLocation,
        sharingStatus
    },{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    })
}