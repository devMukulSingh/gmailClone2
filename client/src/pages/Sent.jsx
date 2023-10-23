import React, { useEffect, useState } from 'react';
import { getMails } from '../service/api';
import { Box,Divider,styled, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import SingleMail from '../components/SingleMail';
import { EMPTY_TABS } from '../constants/constants';
///////////////////////////////////////////////

const MainBox = styled(Box)({
  padding:' 25px 20px',
})

const Sent = ( ) => {

  const[mails,setMails] = useState(null);
  const[refresh, setRefresh ] = useState(null);


  useEffect( () => {
    const getMail = async() => {
      const res = await getMails();
      setMails(res.data);
    }
    getMail();
  },[refresh]);


  return (
    <MainBox>
      {
        mails?.length == 0 ?
            <>
              <Typography sx={{ textAlign:'center'}}>{EMPTY_TABS.bin.heading}</Typography>
              <Typography>{EMPTY_TABS.bin.subHeading}</Typography>
              <Divider sx={{ marginTop:'2rem'}}/>
            </>
            : 
            <>
              <CheckBoxOutlineBlankIcon sx={{ marginBottom:'10px', cursor:'pointer'}}/>
                <Divider/>
              { mails && mails?.map( (mail,index) => {
                  return(
                    <SingleMail mail={mail} key={index} setRefresh={setRefresh} refresh={refresh}/>
                    )
                  })}
            </> 
      }
    </MainBox>
  )
}

export default Sent