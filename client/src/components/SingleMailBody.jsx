import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, styled } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DeleteOutline } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { moveMailToBin } from '../service/api';
///////////////////////////////////////////////////////////////

const MainBox = styled(Box)({
  padding:'15px 20px',
  display:'flex',
  flexDirection:'column',
  gap:10,
})

const SingleMailBody = () => {

    const location = useLocation();
    const  { state }   = location;

    const handleBackBtn = () => {
      window.history.back();
    }
    const handleDeleteBtn = async() => {
      await moveMailToBin( { id:state?._id, bin:!state?.Bin} );
      window.history.back();
    }
  return (
    <MainBox> 

        <Box sx={{ display:'flex',gap:2}}>
            <ArrowBackIcon sx={{ cursor:'pointer'}} onClick = { handleBackBtn } />
            <DeleteOutline sx={{ cursor: 'pointer'}} onClick = { handleDeleteBtn } />
        </Box>

        <Box sx={{ display:'flex', margin:'1rem 3rem',gap:2,alignItems:'center'}}>
            <Typography sx={{ fontSize:25}}>{state?.Subject}</Typography>
            <span style={{ fontSize:12, background:'#DDDDDD',padding:'1px 4px',borderRadius:4 }}>Inbox</span>
        </Box>

        <Box sx={{ display:'flex', gap:1.5}}>
          <AccountCircleOutlinedIcon fontSize='large'/>
          <Typography>{state?.From}</Typography>
        </Box>

        <Box sx={{ margin:'1rem 3rem'}}>
          <Typography sx={{ fontSize:14}}>{state?.Body}</Typography>
        </Box>
    </MainBox>     
  )
}

export default SingleMailBody