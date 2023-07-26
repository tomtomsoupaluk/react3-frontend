import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import VideoImg from '../assets/video-icon.png'

export default function Content() {
    return (
        <Container
            maxWidth='xl'
            sx={{ height: '90vh', display: 'flex', alignItems: 'center' }}
        >
            <Box flex={1} >
                <Typography variant="h3" color={'white'}>The video host with the most</Typography>
                <Typography variant="body1" color={'white'}>
                    See measurable results from your videos as you host, manage, and share video and audio content.
                </Typography>

                <Button
                    variant='contained'
                    size='large'
                    sx={{
                        backgroundColor: 'palevioletred',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'palevioletred',
                            color: 'white'
                        }
                    }}
                >
                    Try for free
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    sx={{
                        backgroundColor: 'white',
                        color: 'palevioletred',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: 'palevioletred'
                        }
                    }}
                >
                    Explore our plans
                </Button>
            </Box>
            <Box flex={1} >
                <img src={VideoImg} alt="video" width={'100%'} />
            </Box>
        </Container>
    )
}
