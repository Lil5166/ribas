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
            <Typography sx={styles.h4} variant="h4">Sign up</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={styles.input}
                    type={"email"}
                    label="Email"
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
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={!!passwordError}
                    helperText={passwordError}
                    required
                />
                <TextField
                    sx={styles.input}
                    label="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    error={!!surnameError}
                    helperText={surnameError}
                    required
                />

                <TextField
                    sx={styles.input}
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={!!nameError}
                    helperText={nameError}
                    required
                />

                <TextField
                    sx={styles.input}
                    label="Patronymic"
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
                    label="Birthdate"
                    name="birthdate"
                    value={formatDate(formData.birthdate)}
                    onChange={handleInputChange}
                    inputProps={{max: maxDate.toISOString().split('T')[0]}}
                    required
                />

                <TextField
                    sx={styles.input}
                    type="text"
                    label="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                />
                <div>
                    <label>Gender:</label>
                    <Radio
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleGenderChange}
                    />
                    Male
                    <Radio
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleGenderChange}
                    />
                    Female
                </div>
                <FormControl sx={styles.input}>
                    <InputLabel htmlFor="group">Group</InputLabel>
                    <Select
                        label="Group"
                        name="group"
                        value={formData.group}
                        onChange={handleGroupChange}
                        required
                    >
                        <MenuItem value="IA-21">IA-21</MenuItem>
                        <MenuItem value="IA-22">IA-22</MenuItem>
                        <MenuItem value="IA-23">IA-23</MenuItem>
                        <MenuItem value="IA-24">IA-24</MenuItem>
                    </Select>
                </FormControl>
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
            <TableContainer sx={styles.tableContainer}>
                <Table sx={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Select</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Patronymic</TableCell>
                            <TableCell>Birthdate</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Group</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Checkbox
                                        checked={data.selected}
                                        onChange={() => {
                                            data.selected = !data.selected;
                                            setTableData([...tableData]);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.surname}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.patronymic}</TableCell>
                                <TableCell>{data.birthdate}</TableCell>
                                <TableCell>{data.gender}</TableCell>
                                <TableCell>{data.phone}</TableCell>
                                <TableCell>{data.group}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button sx={styles.button} variant="contained" color="secondary" onClick={handleDeleteSelected}>
                Delete Selected
            </Button>
            <Button sx={styles.button} variant="contained" color="primary" onClick={handleDuplicateSelected}>
                Duplicate Selected
            </Button>
        </Container>
    );
};

export default SignUpForm;
