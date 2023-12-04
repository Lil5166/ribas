import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import * as styles from './Header.styles';
import Link from 'next/link';
import login from "@/pages/login";
import Box from '@mui/material/Box';


const Header = () => {
    return (
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <IconButton edge="start" color="inherit" aria-label="hotel" sx={styles.iconButton}>
                    <Link href={'/'}>
                        <img src="/icons/logo-white.svg"  alt="logo"/>
                    </Link>
                </IconButton>
                <Box style={{ marginLeft: 'auto' }}>
                    <Link href={"/reg-admin"}>
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
            </Toolbar>
        </AppBar>
    )
};

export default Header;