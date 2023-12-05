export interface LoginFormDto {
    email: string;
    password: string;
}

export interface LoginResponseDto {
    token: string;
}

export interface RegisterFormDto {
    email: string;
    password: string;
    name: string;
    surname: string;
    patronymic?: string;
    phoneNumber: string;
}

export interface User {
    email: string;
    name: string;
    surname: string;
    patronymic?: string;
    phoneNumber: string;
}


export type RegisterResponseDto = LoginResponseDto;