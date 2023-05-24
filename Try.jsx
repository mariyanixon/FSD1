import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Try = () => {
    var [hname,setHname]= useState("   ");
    const ChangeHname =()=>{
        setHname("Home Page");
    }
    const ChangeGname =()=>{
        setHname("Gallery Page");
    }
    const ChangeCname =()=>{
        setHname("Contact Page");
    }

    
  return (
    <div>
       
        <Button variant='contained'onClick={ChangeHname}>Home</Button>
        <Button variant='contained'onClick={ChangeGname}>Gallery</Button>
        <Button variant='contained'onClick={ChangeCname}>Contact</Button>
        <br/>
        <Typography variant='h4'>Welcome to {hname}</Typography>

    </div>
  )
  }

export default Try