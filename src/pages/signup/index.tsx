import React from 'react';
import SignUpForm from "@/components/common/signup-form/SignUpForm";
import Layout from "@/components/common/layout/Layout";
import Image from "next/image";
import { Container, Grid, Box, Button, Typography, Divider } from "@mui/material";
import Link from "next/link";
import * as styles from './SignUp.styles';

const SignUp = () => {
    return (
        <div>
            <Layout title={"Сторінка реєстрації"}/>
            <Image src={"/register-page/background2.jpg"} alt={"фон"} fill/>

            <Container sx={styles.container}>
                <Grid container sx={styles.gridContainer}>
                    <Grid item xs={12} md={6} sx={styles.leftContainer}>
                        <SignUpForm />
                    </Grid>
                    <Grid item xs={12} md={6} sx={styles.rightContainer}>
                        <Box sx={styles.overlay}>
                            <Image src={"/register-page/background-right.jpg"} width={500} height={620} alt={"image"} quality={100} style={{marginLeft: "125px", borderRadius: "0 10px 10px 0",}}/>
                            <Box sx={styles.formContainer}>
                                <Typography variant="h6" sx={styles.loginLink}>Вже маєте акаунт? Заходь</Typography>
                                <Link href="/login">
                                    <Button variant="contained" color="primary" sx={styles.button}>
                                        Вхід
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SignUp;