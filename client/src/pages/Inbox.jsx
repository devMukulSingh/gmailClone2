import React from 'react'
import { EMPTY_TABS } from '../constants/constants';
import {Box, Typography,Divider } from "@mui/material";
const Inbox = () => {
  return (
    <Box sx={{paddingTop:'2rem'}}>        
      <Typography sx={{ textAlign:'center'}}>{EMPTY_TABS.inbox.heading}</Typography>
      <Typography>{EMPTY_TABS.bin.subHeading}</Typography>
      <Divider sx={{ marginTop:'2rem'}}/>
    </Box>
  )
}

export default Inbox