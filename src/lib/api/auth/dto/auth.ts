export interface LoginFormDto {
    email: string;
    password: string;
}

export interface RegisterFormDto {
    email: string;
    password: string;
    name: string;
    surname: string;
    patronymic?: string;
    phoneNumber: string;
}

export interface UserDto {
    email?: string;
    name: string;
    surname: string;
    patronymic?: string;
    phoneNumber: string;
}

export type Admin = LoginFormDto;