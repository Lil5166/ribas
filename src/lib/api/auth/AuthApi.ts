import { client } from '../instance';
import {Admin, LoginFormDto, RegisterFormDto, UserDto} from "@/lib/api/auth/dto/auth";
import Cookies from "js-cookie";
import {getAuthorizationHeader} from "@/lib/utils/getAuthorizationHeader";

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
        const {data} = await client.get<UserDto>('/auth/user', getAuthorizationHeader())
        return data;
    }

    async createAdmin(body: Admin) {
        const { data }  = await client.post('/auth/reg-admin', body)
        return data;
    }
    async updateUserProfile(body: UserDto) {
        const { data } = await client.patch('/users', body, getAuthorizationHeader())
        return data;
    }
}

export default new AuthApi();