import { client } from '../instance';
import {RegisterFormDto, RegisterResponseDto} from "@/lib/api/auth/dto/auth";

class AuthApi {
    async register(body: RegisterFormDto): Promise<RegisterResponseDto> {
        const { data } = await client.post('/auth/registration', body);
        return data;
    }
}


export default new AuthApi();