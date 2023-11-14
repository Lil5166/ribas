import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import {InputLabel, Radio, SelectChangeEvent} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as styles from './SignUpForm.styles';


interface FormData {
    email: string;
    password: string;
    surname: string;
    name: string;
    patronymic: string;
    gender: string;
    birthdate: string;
    phone: string;
    group: string;
}

interface TableData extends FormData {
    selected: boolean;
}

const SignUpForm: React.FC = () => {
    const initialFormData: FormData = {
        email: '',
        password: '',
        surname: '',
        name: '',
        patronymic: '',
        gender: '',
        birthdate: '',
        phone: '',
        group: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [tableData, setTableData] = useState<TableData[]>([]);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [surnameError, setSurnameError] = useState<string | null>(null);
    const [nameError, setNameError] = useState<string | null>(null);
    const [patronymicError, setPatronymicError] = useState<string | null>(null);


    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() - 1);


    const handleGenderChange = (event: SelectChangeEvent<string>) => {
        setFormData({
            ...formData,
            gender: event.target.value,
        });
    };
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
        if (name === 'birthdate') {
            const selectedDate = new Date(value);
            if (selectedDate > maxDate) {
                return;
            }
        }
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTableData([...tableData, {...formData, selected: false}]);
        setFormData(initialFormData);
    };

    const handleDeleteSelected = () => {
        setTableData(tableData.filter((item) => !item.selected));
    };

    const handleDuplicateSelected = () => {
        const duplicatedData = tableData
            .filter((item) => item.selected)
            .map((item) => ({...item, selected: false}));
        setTableData([...tableData, ...duplicatedData]);
    };
    const handleGroupChange = (event: SelectChangeEvent<string>) => {
        setFormData({
            ...formData,
            group: event.target.value,
        });
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        const maskedValue = value.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})$/, '+38 (0$1) $2-$3-$4');
        setFormData({
            ...formData,
            phone: maskedValue,
        });
    };


    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month: string | number = date.getMonth() + 1;
        let day: string | number = date.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    };


    return (
        <Container sx={styles.container}>
            <Typography sx={styles.h4} variant="h4">Реєстрація користувача</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={styles.input}
                    type={"email"}
                    label="Електронна пошта"
                    placeholder={"google.gmail.com"}
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!emailError}
                    helperText={emailError}
                    required
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
                />

                <TextField
                    sx={styles.input}
                    label="По батькові"
                    name="patronymic"
                    value={formData.patronymic}
                    onChange={handleInputChange}
                    error={!!patronymicError}
                    helperText={patronymicError}
                    required
                />

                <TextField
                    sx={styles.inputDate}
                    type={"date"}
                    label="Дата народження"
                    name="birthdate"
                    value={formatDate(formData.birthdate)}
                    onChange={handleInputChange}
                    inputProps={{max: maxDate.toISOString().split('T')[0]}}
                    required
                />

                <TextField
                    sx={styles.input}
                    type="text"
                    label="Номер телефону"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                />
                <div>
                    <label>Стать:</label>
                    <Radio
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleGenderChange}
                    />
                    Чоловік
                    <Radio
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleGenderChange}
                    />
                    Жінка
                </div>
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
        </Container>
    );
};

export default SignUpForm;
