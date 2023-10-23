import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer'
import {  Button, Typography,List,ListItem, styled } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ComposeMail from "../components/ComposeMail";
import { useNavigate } from 'react-router-dom';
/////////////////////////////////////////////////////
const StyledDrawer = {
    padding:'0.5rem 0',
    marginTop:'4rem',
    background:"transparent",
    border:0,
    width:'15rem'
}
const ComposeBtn = styled(Button)({
    textTransform:"none",
    background:"#C2E7FF",
    borderRadius:15,
    height:"3.5rem",
    width:'9rem',
    color:'#000',
    paddingLeft:5,
    marginLeft:10,

    '&:hover':{
        background:"#C2E7FF",
    },
    '&:focus':{
        border:'none',
    }
})

const StyledList = styled(ListItem)({
    '&:hover':{
        background:'#EAF1FB',
        cursor:"pointer",
    },
    display:'flex',
    gap:20,
    borderRadius:20
})
///////////////////////////////////////////////////////////////////////////////////////////
const Sidebar = ( {setOpen,open} ) => {

    const navigate = useNavigate();
    const[openCompose, setOpenCompose ] = useState(false);

    const handleClose = () =>{
        setOpen(false);
    }
    const handleComposeBtn = () => {
        setOpenCompose(true);
        
    }

  return (
    <>
        <Drawer
          variant='persistent'
          anchor="left"
          open={open}
          onClose={ handleClose }
          hideBackdrop={true}
          PaperProps= { { sx: StyledDrawer } }
        >
            <ComposeBtn onClick={ handleComposeBtn }>
                <CreateOutlinedIcon sx={{ marginRight:1}}/>Compose
            </ComposeBtn>
            <List>

            <StyledList onClick={ () => navigate('/') }>
                <MailOutlinedIcon/>
                <Typography>Inbox</Typography>
            </StyledList>

            <StyledList onClick={ () => navigate('/starred') }>
                <StarBorderOutlinedIcon/>
                <Typography>Starred</Typography>
            </StyledList>

            <StyledList onClick={ () => navigate('/sent') }>
                <SendOutlinedIcon/>
                <Typography>Sent</Typography>
            </StyledList>

            <StyledList onClick={ () => navigate('/drafts') } >
                <DraftsOutlinedIcon/>
                <Typography>Draft</Typography>
            </StyledList>

            <StyledList onClick={ () => navigate('/bin') }>
                <DeleteOutlineOutlinedIcon/>
                <Typography>Bin</Typography>
            </StyledList>

            </List>

        </Drawer>

        <ComposeMail openCompose = {openCompose} setOpenCompose={setOpenCompose}/>
    </> 
  )
}

export default Sidebar