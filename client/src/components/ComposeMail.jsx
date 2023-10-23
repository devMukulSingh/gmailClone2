import { Button, Dialog, InputBase, Typography,Box } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import React, { useState } from 'react';
import { DeleteOutline} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import { saveDraftMail, saveSentMail } from '../service/api';


const StyledDialog = {
    margin:'auto 4rem 0 auto',
    height:'70vh',
    width:'50vw',
    padding:'0 1rem 1rem 1rem',
    gap:1,

}

const ComposeMail = ( {setOpenCompose,openCompose} ) => {

    const initialValue = {
        recepients : '',
        subject:'',
        body:''
    }
    const[value, setValue] = useState(initialValue);

    const handleClose = () => {

        const payload = {
            From : "mukulsingh2276@gmail.com",
            To : value.recepients,
            Subject : value.subject,
            Body : value.body,
            Type : 'draft',
            Date : new Date(),
        }
        saveDraftMail(payload);
        setOpenCompose(false);
    }
    const onValueChange = (e) => { 
        setValue( {...value, [e.target.name] : e.target.value});

    }

    const handleSendBtn = (e) => {
        e.preventDefault();
        if(window.Email){
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "mukulsingh2276@gmail.com",
                Password : "7562E5B6C7F297DB6CA08939B0FA4101CF96",
                To : value.recepients,
                From : "mukulsingh2276@gmail.com",
                Subject : value.subject ,
                Body : value.subject,
            })

            const payload = {
                From : "mukulsingh2276@gmail.com",
                To : value.recepients,
                Subject : value.subject,
                Body : value.body,
                Type : 'sent',
                Date : new Date(),
            }
            saveSentMail(payload);

        }
        setOpenCompose(false);
    
    }

  return (
    <>
        <Dialog
            open = { openCompose }
            onClose={ handleClose }
            PaperProps = { { sx:StyledDialog } }
            hideBackdrop = {true}
        >
            <Box sx={{ display:'flex', paddingTop:1, }}>
                <Typography>New Message</Typography>
                <CloseIcon sx={{ marginLeft:'auto',cursor:"pointer"}} onClick = { handleClose }/>
            </Box>

            <InputBase placeholder='Recipients' name="recepients" onChange={ (e) => onValueChange(e) }/>
            <InputBase placeholder='Subject' name="subject" onChange = { (e) => onValueChange(e) } />
            <Textarea 
                minRows={14}
                sx={{ border:'none',outline:'none'}}
                onChange = { (e) => onValueChange(e)}
                name="body"/>

            <Box sx={{ marginTop:'auto', display:'flex', justifyContent:'space-between' }} >
                <Button onClick = { handleSendBtn }>
                    Send
                </Button>
                <DeleteOutline/>
            </Box>

        </Dialog>
    </>
  )
}

export default ComposeMail