import React, { useEffect, useState } from 'react';
import { getStarredMail, moveMailToBin } from '../service/api';
import { Box,Divider,styled,Typography,Checkbox } from '@mui/material';
import SingleMail from '../components/SingleMail';
import { EMPTY_TABS } from "../constants/constants.js";
import {DeleteOutline} from "@mui/icons-material";

///////////////////////////////////////////////

const MainBox = styled(Box)({
  padding:'25px 20px',
})

const Starred = () => {

  const[mails,setMails] = useState(null);
  const[refresh, setRefresh ] = useState(null);
  const[checkedMails, setCheckedMails] = useState([]);


  useEffect( () => {
    const getStarMail = async() => {
      const res = await getStarredMail();
      setMails(res?.data);
    }
    getStarMail();
  },[refresh]);

  const onChangeCheckAll = (e) => {
    if(e.target.checked){
      const Emails = mails.map( mail => mail?._id);
      setCheckedMails(Emails);
    }
    else{
      setCheckedMails([]);
    }
  }
  const handleDeleteChecked = () => {
      moveMailToBin({checkedMails , bin:!mails?.bin});
  }

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
        <Box sx={{ display:'flex',alignItems:'center'}}>
          <Checkbox  onChange = { (e) => onChangeCheckAll(e) }  />
          <DeleteOutline sx={{ cursor:'pointer' }} onClick = { handleDeleteChecked } />
        </Box>
          {
            mails && mails?.map( (mail,index) => {
              return(
                <SingleMail mail={mail} key={index} setRefresh={setRefresh} refresh={refresh} 
                  checkedMails={checkedMails} setCheckedMails={setCheckedMails}
                />
                )
              })
            }
  
        </>
      }
    </MainBox>
  )
}

export default Starred