import { Box, Typography, styled, Checkbox } from '@mui/material'
import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import {  DeleteOutline } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { moveMailToBin, toggleStarred , deleteMail } from '../service/api';

///////////////////////////////////////////////////////////////////////////////

const MainBox = styled(Box)({
    display:'flex',
    alignItems:'center',
    marginTop:10,
    gap:20
})

////////////////////////////////////////////////////////////////////

const SingleMail = ( { mail,setRefresh,checkedMails, setCheckedMails } ) => {

    const navigate = useNavigate();

    const handleOpenMail = () => {
        navigate('/singlemailbody', { state: mail})
    }

    const handleStarToggle = async() => {
        await toggleStarred( { id:mail?._id , star:!mail?.Starred } );
        setRefresh(prev => !prev);
    }

    const handleDeleteBtn = async() => {
        if(mail?.Bin==true){
            await deleteMail([mail?._id]);
        }
        else{
            await moveMailToBin([mail?._id]);
        }
        setRefresh(prev => !prev);
    }

    const onChangeCheckBox = () => {
        if(checkedMails.includes(mail?._id)){
            setCheckedMails( prev => prev.filter( id => id != mail?._id )  );
        }
        else{
            setCheckedMails( prev => [...prev,mail?._id] );
        }
    }
///////////////////////////////////////////////////////////////////////////////////
  return (
    <MainBox>

        <Box sx={{ display:'flex', gap:1 , flex:0.05, alignItems:'center'}}>
            <Checkbox size='small' onChange = { () => onChangeCheckBox() } 
            checked={ checkedMails && checkedMails.includes(mail?._id) } />
           { mail?.Starred ? 
            <StarIcon sx={{ color:'#F7CA4C', cursor:'pointer' }} fontSize='small'  onClick = {  handleStarToggle  }/> : 
            <StarOutlineIcon sx={{cursor:'pointer' }} fontSize='small'  onClick = { handleStarToggle } />}
            <DeleteOutline sx={{ cursor:'pointer' }} fontSize='small' onClick = { handleDeleteBtn } />
        </Box>

        <Box sx={{ display:'flex', flex:0.95, cursor:'pointer',gap:2}} onClick = { handleOpenMail } >
            <Typography >{mail?.From}</Typography>
            <Typography >{mail?.Subject}</Typography>-
            <Typography 
                sx={{ marginLeft:'',
                        display:'-webkit-box',
                        'WebkitBoxOrient': 'vertical',    
                        'WebkitLineClamp':1,
                        overflow:'hidden',
                        fontWeight:'300 !important' 
                }}>
                {mail?.Body}
            </Typography>
            <span style={{ marginLeft:'auto',fontSize:14}}>
            { (new window.Date(mail?.Date).getDate() )}&nbsp;
            { ( new window.Date(mail?.Date).toLocaleString('default', {month:'long'}))}   
            </span>
        </Box>

    </MainBox>
  )
}

export default SingleMail