import React from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material'

export default function LoginDialog(props) {
  return (
    <Dialog
        open={props.open}
    >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <TextField
                label='Username'
                variant='outlined'
                fullWidth
                margin='dense'
                onChange={props.handleChangeUsername}
            />
            <TextField
                label='Password'
                variant='outlined'
                fullWidth
                margin='dense'
                type='password'
                onChange={props.handleChangePassword}
            />
        </DialogContent>
        <DialogActions>
            <Button variant='contained' color='primary' onClick={props.handleLogin}>Login</Button>  
            <Button variant='contained' color='error' onClick={props.handleCloseDialog}>Cancel</Button>
        </DialogActions>
    </Dialog>
  )
}
