import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import * as styles from './Header.styles';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import AuthApi from '@/lib/api/auth/AuthApi';
import {UserDto} from "@/lib/api/auth/dto/auth";

const Header = () => {
    const isAuthenticated = !!Cookies.get('token');
    const router = useRouter();
    const [userData, setUserData] = useState<UserDto | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await AuthApi.getMe();
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (isAuthenticated) {
            fetchUserData();
        }
    }, [isAuthenticated]);

    const handleLogout = () => {
        Cookies.remove('token');
        router.push('/login');
    };

    return (
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <IconButton edge="start" color="inherit" aria-label="hotel" sx={styles.iconButton}>
                    <Link href={'/'}>
                        <img src="/icons/logo-white.svg" alt="logo" />
                    </Link>
                </IconButton>
                {isAuthenticated && userData ? (
                    <Box sx={styles.boxAuth}>
                        <Link href={"/user"}>
                        <Avatar style={{ marginRight: '20px' }} />
                        </Link>
                        <span style={{ color: 'white', marginRight: '16px' }}>{`${userData.name} ${userData.surname}`}</span>
                        <Button
                            color="inherit"
                            onClick={handleLogout}
                            sx={styles.buttonAuth}
                        >
                            Вийти з акаунту
                        </Button>
                        <Link href={"user/bookings"} passHref>
                            <Button color="inherit" sx={styles.buttonAuth}>
                                Переглянути бронювання
                            </Button>
                        </Link>
                    </Box>
                ) : (
                    <Box style={{ marginLeft: 'auto' }}>
                        <Link href={'/reg-admin'}>
                            <Button color="inherit" sx={styles.button}>
                                Зареєструвати готель
                            </Button>
                        </Link>
                        <Link href="/signup" passHref>
                            <Button color="inherit" sx={styles.whiteButton}>
                                Зареєструватися
                            </Button>
                        </Link>
                        <Link href="/login" passHref>
                            <Button color="inherit" sx={styles.whiteButton}>
                                Увійти
                            </Button>
                        </Link>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
