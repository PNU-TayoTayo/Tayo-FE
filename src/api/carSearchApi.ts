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