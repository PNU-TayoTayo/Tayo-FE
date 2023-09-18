export default async function apiCall(fn) {
    try {
        const response = await fn;
        return response.data;
    }catch (error) {
        if(error.response) {
            if(error.response.status === 401) {
                location.href = '/login';
                return;
            } else {
                const errorMessage = error.response.data?.responseData?.message || error.response.data?.error?.message || '오류가 발생했습니다.';
                alert(errorMessage);
                return;
            }
        } else {
            alert(`Error : ${error.message}`);
            return;
        }
    }
}