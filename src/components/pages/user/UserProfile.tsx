
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, TextField, Button } from '@mui/material';
import AuthApi from '@/lib/api/auth/AuthApi';
import { UserDto } from '@/lib/api/auth/dto/auth';

const UserProfile = () => {
    const router = useRouter();
    const [userData, setUserData] = useState<UserDto>({
        name: '',
        surname: '',
        patronymic: '',
        phoneNumber: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await AuthApi.getMe();
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdateProfile = async () => {
        try {
            await AuthApi.updateUserProfile(userData);
            router.push('/user');
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    return (
        <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
    User Profile
    </Typography>
    <form>
    <TextField
        label="Name"
    name="name"
    value={userData.name}
    onChange={handleInputChange}
    fullWidth
    margin="normal"
    />
    <TextField
        label="Surname"
    name="surname"
    value={userData.surname}
    onChange={handleInputChange}
    fullWidth
    margin="normal"
    />
    <TextField
        label="Patronymic"
    name="patronymic"
    value={userData.patronymic}
    onChange={handleInputChange}
    fullWidth
    margin="normal"
    />
    <TextField
        label="Phone Number"
    name="phoneNumber"
    value={userData.phoneNumber}
    onChange={handleInputChange}
    fullWidth
    margin="normal"
    />
    <Button
        variant="contained"
    color="primary"
    onClick={handleUpdateProfile}
    fullWidth
    style={{ marginTop: '1rem' }}
>
    Update Profile
    </Button>
    </form>
    </Container>
);
};

export default UserProfile;
