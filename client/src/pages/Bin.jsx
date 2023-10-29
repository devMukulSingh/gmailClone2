import React, { useEffect, useState } from 'react';
import { getBinMail, getMails, deleteMail } from '../service/api';
import { Box,Divider,Typography,styled, Checkbox } from '@mui/material';
import SingleMail from '../components/SingleMail';
import { EMPTY_TABS } from "../constants/constants.js";
import { DeleteOutline } from '@mui/icons-material';
///////////////////////////////////////////////

const MainBox = styled(Box)({
  padding:'25px 20px',
})

const Bin = () => {

  const[mails,setMails] = useState(null);
  const[refresh, setRefresh ] = useState(null);
  const[checkedMails, setCheckedMails] = useState([]);

  useEffect( () => {
    getMail();
  },[refresh]);

  const getMail = async() => {
    const res = await getBinMail();
    setMails(res.data);
  }

  const onChangeCheckAll = (e) => {

    if(e.target.checked){
      const Emails = mails?.map( mail => mail?._id );
      setCheckedMails(Emails);
    }
    else{
      setCheckedMails([]);
    }
  }
  const handleDeleteChecked = async() => {
    await deleteMail(checkedMails);
    setRefresh( prev => !prev);
  }
  return (

    <MainBox>
      {
        mails!=null ? 
        <>
        <Box sx={{ display:'flex',alignItems:'center'}}>
          <Checkbox  onChange = { (e) => onChangeCheckAll(e) } />
          <DeleteOutline sx={{ cursor:'pointer' }} onClick = { handleDeleteChecked } />
        </Box>

        <Divider/>
        {
          mails && mails?.map( (mail,index) => {
            return(
              <SingleMail 
              mail={mail} 
              key={index} 
              setRefresh={setRefresh} 
              refresh={refresh} 
              checkedMails={checkedMails} 
              setCheckedMails={setCheckedMails}/>
              )
            })
          }
        </> :

        <>
          <Typography sx={{ textAlign:'center'}}>{EMPTY_TABS.bin.heading}</Typography>
          <Typography>{EMPTY_TABS.bin.subHeading}</Typography>
          <Divider sx={{ marginTop:'2rem'}}/>
        </>

      }
    </MainBox>
  )
}

export default Bin;