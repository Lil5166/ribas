import Cookies from "js-cookie";

const token = Cookies.get('token')
export const getAuthorizationHeader = () => {
    return {
        headers: { Authorization: `Bearer ${token}` },
    };
};