import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'black'} sx={{ flexGrow: 1}} align='left' variant='h6' >NewApp</Typography>
                <Button variant='contained' color='error'>Login</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar