import React, {useRef, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {InputAdornment, Snackbar} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import * as styles from './SignUpForm.styles';
import AuthApi from "@/lib/api/auth/AuthApi";
import MuiAlert from '@mui/material/Alert';
import { useRouter } from 'next/router';



interface FormData {
    email: string;
    password: string;
    name: string;
    surname: string;
    patronymic?: string;
    phoneNumber: string;
}

const SignUpForm: React.FC = () => {
    const initialFormData: FormData = {
        email: '',
        password: '',
        surname: '',
        name: '',
        patronymic: '',
        phoneNumber: '',
    };

    const router = useRouter();
    const [registrationStatus, setRegistrationStatus] = useState<string | null>(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [surnameError, setSurnameError] = useState<string | null>(null);
    const [nameError, setNameError] = useState<string | null>(null);
    const [patronymicError, setPatronymicError] = useState<string | null>(null);



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        const patternEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
        const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_]).{8,}$/;
        const patternSurname = /^([А-ЯІЇЄҐ'’][а-яіїєґ'’]*)(\s[А-ЯІЇЄҐ'’][а-яіїєґ'’]*|-?[А-ЯІЇЄҐ'’][а-яіїєґ'’]*)?$/;
        const patternName = /^([А-ЯІЇЄҐ'’][а-яіїєґ'’]*)([А-ЯІЇЄҐ'’][а-яіїєґ'’]*|-?[А-ЯІЇЄҐ'’][а-яіїєґ'’]*)?$/;
        const patternPatronymic = /^([А-ЯІЇЄҐ'’][а-яіїєґ'’]*)(\s[А-ЯІЇЄҐ'’а-яіїєґ'’]*|-?[А-ЯІЇЄҐ'’а-яіїєґ'’]*[А-ЯІЇЄҐ'’][а-яіїєґ'’]*)?$/;
        switch (name as keyof FormData) {
            case "email":
                setEmailError(patternEmail.test(value) ? null : 'Некоректний формат електронної пошти');
                break;
            case "password":
                setPasswordError(patternPassword.test(value) ? null : 'Пароль повинен містити мінімум 1 маленьку літеру, 1 велику літеру, 1 цифру, 1 спеціальний символ і бути не менше 8 символів');
                break;
            case 'surname':
                setSurnameError(patternSurname.test(value) ? null : 'Прізвище повинно мати велику першу літеру і не містити цифр.');
                break;
            case 'name':
                setNameError(patternName.test(value) ? null : 'Ім\'я повинно мати велику першу літеру і не містити цифр.');
                break;
            case 'patronymic':
                setPatronymicError(patternPatronymic.test(value) ? null : 'По-батькові повинно мати велику першу літеру і не містити цифр.');
                break;
            default:
                break;
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        const maskedValue = value.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})$/, '+38 (0$1) $2-$3-$4');
        setFormData({
            ...formData,
            phoneNumber: maskedValue,
        });
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            await AuthApi.register(formData);
            setRegistrationStatus('Реєстрація успішна!');
            setFormData(initialFormData);
            setOpenSnackbar(true);
            router.push('/login')
        } catch (err) {
            setRegistrationStatus('Помилка реєстрації. Спробуйте ще раз.');
            setOpenSnackbar(true);
        }
    };
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };


    return (
        <Container sx={styles.container}>
            <Typography sx={styles.h4} variant="h4">Реєстрація користувача</Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    sx={styles.input}
                    type={"email"}
                    label="Електронна пошта"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!emailError}
                    helperText={emailError}
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    sx={styles.input}
                    type={"password"}
                    label="Пароль"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={!!passwordError}
                    helperText={passwordError}
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    sx={styles.input}
                    label="Прізвище"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    error={!!surnameError}
                    helperText={surnameError}
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    sx={styles.input}
                    label="Ім'я"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={!!nameError}
                    helperText={nameError}
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    sx={styles.input}
                    label="По батькові"
                    name="patronymic"
                    value={formData.patronymic}
                    onChange={handleInputChange}
                    error={!!patronymicError}
                    helperText={patronymicError}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    sx={styles.input}
                    type="text"
                    label="Номер телефону"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PhoneIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    sx={styles.buttonSend}
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={
                        !!emailError ||
                        !!passwordError ||
                        !!surnameError ||
                        !!nameError ||
                        !!patronymicError
                    }
                >
                    Send
                </Button>
            </form>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
                    {registrationStatus}
                </MuiAlert>
            </Snackbar>
        </Container>
    )
};

export default SignUpForm;
