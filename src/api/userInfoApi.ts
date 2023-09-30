import axios from '@utils/customAxios';
export function getMyInfo() {
    return axios.get('/tayo/my',{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}