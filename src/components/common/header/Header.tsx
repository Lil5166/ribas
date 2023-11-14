import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as styles from './Header.styles';
import Link from 'next/link';

const Header = () => {
    return (
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <IconButton edge="start" color="inherit" aria-label="hotel" sx={styles.iconButton}>
                </IconButton>
                <Typography variant="h6" component="div" sx={styles.title}>
                    Ribas
                </Typography>
                <Link href={"/reg-hotel"}>
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
            </Toolbar>
        </AppBar>
    )
};

export default Header;
