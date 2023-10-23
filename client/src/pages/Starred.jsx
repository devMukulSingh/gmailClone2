import React, { useEffect, useState } from 'react';
import { getStarredMail } from '../service/api';
import { Box,Divider,styled,Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import SingleMail from '../components/SingleMail';
import { EMPTY_TABS } from "../constants/constants.js";

///////////////////////////////////////////////

const MainBox = styled(Box)({
  padding:'25px 20px',
})

const Starred = () => {

  const[mails,setMails] = useState(null);
  const[refresh, setRefresh ] = useState(null);

  useEffect( () => {
    const getStarMail = async() => {
      const res = await getStarredMail();
      setMails(res?.data);
    }
    getStarMail();
  },[refresh]);

  return (
    <MainBox>

     {

      mails?.length==0 ? 
        <>
          <Typography sx={{ textAlign:'center'}}>{EMPTY_TABS.starred.heading}</Typography>
          <Typography>{EMPTY_TABS.starred.subHeading}</Typography>
          <Divider sx={{ marginTop:'2rem'}}/>
        </>
        :

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
  
        </>
      }
    </MainBox>
  )
}

export default Starred