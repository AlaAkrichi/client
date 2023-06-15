import React, { useEffect, useState } from 'react'
import Bot from './Bot'
import Fab from '@mui/material/Fab';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Styles from './Dashbored.module.css'

export default function Dashbored() {
    const[time,setTime]= useState('')
    const [emoji,setEmoji]=useState()
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    const getCurrentTimeOfDay = () => {
      const currentHour = new Date().getHours();
  
      if (currentHour >= 5 && currentHour < 12) {
        setTime('morning');
        setEmoji('🌄')
      } else if (currentHour >= 12 && currentHour < 18) {
        setTime('afternoon');
        setEmoji('☀️')
      } else {
        setTime('night');
        setEmoji('🌙')
      }
    };
    useEffect(() => {
      getCurrentTimeOfDay();
    }, [])
  return (
    <>
    <div className={Styles.Container} > <h1> Hi ,  Good {time } visitor {emoji} </h1> </div>
    <div className={Styles.action} >
    <Fab color="primary" aria-label="add" onClick={handleClickOpen} >
        <SmartToyIcon />
    </Fab>
    </div>
    {open && (

        <div className={Styles.chatWindow} >
     <Bot
        open={open}
        handleClose={handleClose} 
        /> 
        </div>
        )}
    </>
  )
}
