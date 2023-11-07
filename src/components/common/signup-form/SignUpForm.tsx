import React, { useState } from 'react';
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

    const handleGenderChange = (event: SelectChangeEvent<string>) => {
        setFormData({
            ...formData,
            gender: event.target.value,
        });
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTableData([...tableData, { ...formData, selected: false }]);
        setFormData(initialFormData);
    };

    const handleDeleteSelected = () => {
        setTableData(tableData.filter((item) => !item.selected));
    };

    const handleDuplicateSelected = () => {
        const duplicatedData = tableData
            .filter((item) => item.selected)
            .map((item) => ({ ...item, selected: false }));
        setTableData([...tableData, ...duplicatedData]);
    };

    return (
        <Container>
            <Typography variant="h4">Sign up</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    type={"email"}
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    type={"password"}
                    label="Passwod"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    label="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    label="Patronymic"
                    name="patronymic"
                    value={formData.patronymic}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    type={"date"}
                    label="Birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    type={"text"}
                    label="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
                <div>
                    <label>Gender:</label>
                    <Radio
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleInputChange}
                    />
                    Male
                    <Radio
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleInputChange}
                    />
                    Female
                </div>
                <FormControl>
                    <InputLabel htmlFor="group">Group</InputLabel>
                    <Select
                        label="Group"
                        name="group"
                        value={formData.group}
                        required
                    >
                        <MenuItem value="IA-21">IA-21</MenuItem>
                        <MenuItem value="IA-22">IA-22</MenuItem>
                        <MenuItem value="IA-23">IA-23</MenuItem>
                        <MenuItem value="IA-24">IA-24</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </form>
            <TableContainer>
                <Table>
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
            <Button variant="contained" color="secondary" onClick={handleDeleteSelected}>
                Delete Selected
            </Button>
            <Button variant="contained" color="primary" onClick={handleDuplicateSelected}>
                Duplicate Selected
            </Button>
        </Container>
    );
};

export default SignUpForm;
