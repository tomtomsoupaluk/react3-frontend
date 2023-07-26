import React from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material'

export default function LoginDialog(props) {
    return (
        <Dialog
            open={props.open}
        >
            <DialogTitle>Register</DialogTitle>
            <DialogContent>
                <TextField
                    label='Username'
                    name='username'
                    variant='outlined'
                    fullWidth
                    margin='dense'
                    onChange={props.handleChange}
                />
                <TextField
                    label='Password'
                    name='password'
                    variant='outlined'
                    fullWidth
                    margin='dense'
                    type='password'
                    onChange={props.handleChange}
                />
                <TextField
                    label='Age'
                    name='age'
                    variant='outlined'
                    fullWidth
                    margin='dense'
                    type='password'
                    onChange={props.handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color='primary' onClick={props.handleRegister}>Register</Button>
                <Button variant='contained' color='error' onClick={props.handleCloseRegisterDiag}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}
