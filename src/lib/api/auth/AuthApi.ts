import { client } from '../instance';
import {LoginFormDto, RegisterFormDto, User} from "@/lib/api/auth/dto/auth";
import Cookies from "js-cookie";

const token = Cookies.get('token')
class AuthApi {
    async register(body: RegisterFormDto) {
        const {data} = await client.post('/auth/registration', body);
        return data;
    }

    async login(body: LoginFormDto) {
        const {data} = await client.post('/auth/login', body)
        return data
    }

    async getMe() {
        const {data} = await client.get<User>('/auth/user', {
            headers: {Authorization: `Bearer ${token}`}
        })
        return data;
    }
}


export default new AuthApi();