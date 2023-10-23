import React, { useEffect, useState } from 'react';
import { getBinMail, getMails } from '../service/api';
import { Box,Divider,Typography,styled } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import SingleMail from '../components/SingleMail';
import { EMPTY_TABS } from "../constants/constants.js";
///////////////////////////////////////////////

const MainBox = styled(Box)({
  padding:'25px 20px',
})

const Bin = () => {

  const[mails,setMails] = useState(null);
  const[refresh, setRefresh ] = useState(null);


  useEffect( () => {
    const getMail = async() => {
      const res = await getBinMail();
      setMails(res.data);
    }
    getMail();
  },[refresh]);

  return (

    <MainBox>
      {
        mails!=null ? 
        <>
          <CheckBoxOutlineBlankIcon sx={{ marginBottom:'10px', cursor:'pointer'}}/>
          <Divider/>
        {
          mails && mails?.map( (mail,index) => {
            return(
              <SingleMail mail={mail} key={index} setRefresh={setRefresh} refresh={refresh}/>
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