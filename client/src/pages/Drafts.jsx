import React, { useEffect, useState } from 'react';
import { getDraftMails } from '../service/api';
import { Box,Divider,styled,Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import SingleMail from '../components/SingleMail';
import { EMPTY_TABS } from '../constants/constants';
///////////////////////////////////////////////

const MainBox = styled(Box)({
  padding:'25px 20px',
})

const Drafts = () => {

  const[mails,setMails] = useState(null);
  const[refresh, setRefresh ] = useState(null);

  useEffect( () => {
    const getMail = async() => {
      const res = await getDraftMails();
      setMails(res.data);
      console.log(mails);
    }
    getMail();
  },[refresh]);


  return (
    <MainBox>
      {
        mails?.length==0 ?
        
        <>
          <Typography sx={{ textAlign:'center'}}>{EMPTY_TABS.draft.heading}</Typography>
          <Typography sx={{ textAlign:'center'}}>{EMPTY_TABS.draft.subHeading}</Typography>
          <Divider sx={{ marginTop:'2rem'}}/>
        </>   
      :
        <>
          <CheckBoxOutlineBlankIcon sx={{ marginBottom:'10px', cursor:'pointer' }}/>
          <Divider/>
          {
            mails && mails?.map( (mail,index) => {
              return(
                <SingleMail mail={mail} key={index} refresh = {refresh} setRefresh={setRefresh}/>
                )
              })
            }
          </> 
 
        }
    </MainBox>
  )
}

export default Drafts