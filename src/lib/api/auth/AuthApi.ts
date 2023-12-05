import { client } from '../instance';
import {LoginFormDto, RegisterFormDto} from "@/lib/api/auth/dto/auth";

class AuthApi {
    async register(body: RegisterFormDto) {
        const { data } = await client.post('/auth/registration', body);
        return data;
    }

    async login(body: LoginFormDto) {
        const { data } = await client.post('/auth/login', body)
        return data
    }
}


export default new AuthApi();