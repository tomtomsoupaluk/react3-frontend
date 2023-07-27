import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Container, Button, Box, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import LoginDialog from './LoginDialog';
import RegisterDialog from './RegisterDialog';

export default function Navbar(props) {
    const [authData, setAuthData] = useState({})
    const [open, setopen] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)
    const navigation = useNavigate()

    const handleLink = (path) => {
        navigation(path)
    }

    const handleOpenDialog = () => {
        setopen(true)
    }

    const handleOpenRegisterDiag = () => {
        setOpenRegister(true)
    }

    const handleCloseRegisterDiag = () => {
        setOpenRegister(false)
    }

    const handleCloseDialog = () => {
        setopen(false)
    }

    const handleChange = (e) => {
        setAuthData({
            ...authData,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        axios({
            url: window.$api + '/login',
            method: 'POST',
            data: authData
        }).then(res => {
            if (res.data.success) {
                props.setAvatarLetter(res.data.data.user.username.charAt(0).toUpperCase());
                localStorage.setItem('token', res.data.data.token)
                props.setIsLoggedIn(true)
                setopen(false)
            } else {
                alert(res.data.message)
            }
        })
    }

    const handleRegister = () => {
        axios({
            url: window.$api + '/register',
            method: 'POST',
            data: authData
        }).then(res => {
            alert(res.data)
        })
    }

    return (
        <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', height: '10vh' }}>
            <Box flex={1}>
                <Typography
                    variant="h5"
                    color={'white'}
                    onClick={() => handleLink('/')}
                    sx={{
                        '&:hover': {
                            cursor: 'pointer'

                        }
                    }}
                >
                    WISTIA
                </Typography>
            </Box>

            <Box flex={3} display={{ xs: 'none', md: 'flex' }} gap={2}>
                <Typography
                    variant="body1"
                    color={'white'}
                    onClick={() => handleLink('/products')}
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                            textDecoration: 'underline'

                        }
                    }}
                >
                    Product
                </Typography>
                <Typography
                    variant="body1"
                    color={'white'}
                    onClick={() => handleLink('/learning-center')}
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                            textDecoration: 'underline'

                        }
                    }}
                >
                    Learning Center
                </Typography>
                <Typography
                    variant="body1"
                    color={'white'}
                    onClick={() => handleLink('/original-series')}
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                            textDecoration: 'underline'

                        }
                    }}
                >
                    Original Series
                </Typography>
                <Typography
                    variant="body1"
                    color={'white'}
                    onClick={() => handleLink('/aboutus')}
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                            textDecoration: 'underline'

                        }
                    }}
                >
                    About
                </Typography>
            </Box>

            {!props.isLoggedIn ?
                <Box flex={1} display={{ xs: 'none', md: 'flex' }} justifyContent={'flex-end'} gap={2} >
                    <Button
                        variant="contained"
                        size='small'
                        sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: 'black',
                            },
                        }}
                        onClick={handleOpenDialog}
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained"
                        size='small'
                        sx={{
                            backgroundColor: 'darkblue',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'darkblue',
                                color: 'white',
                            },
                        }}
                        onClick={handleOpenRegisterDiag}
                    >
                        Register
                    </Button>
                </Box>
                :
                <Avatar
                    sx={{
                        cursor: 'pointer',
                        display: { xs: 'none', md: 'flex' },
                    }}
                    onClick={() => handleLink('/profile')}
                >
                    {props.avatarLetter}
                </Avatar>
            }

            <MenuIcon
                fontSize='large'
                sx={{ display: { xs: 'block', md: 'none' } }}
            />



            <LoginDialog
                open={open}
                handleLogin={handleLogin}
                handleCloseDialog={handleCloseDialog}
                handleChange={handleChange}
            />
            <RegisterDialog
                open={openRegister}
                handleRegister={handleRegister}
                handleCloseRegisterDiag={handleCloseRegisterDiag}
                handleChange={handleChange}
            />
        </Container>
    )
}
