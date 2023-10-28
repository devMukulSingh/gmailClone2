import React, { useEffect, useState } from 'react';
import { getMails, moveMailToBin } from '../service/api';
import { Box,Divider,styled, Typography,Checkbox } from '@mui/material';
import SingleMail from '../components/SingleMail';
import { EMPTY_TABS } from '../constants/constants';
import { DeleteOutline } from '@mui/icons-material';
///////////////////////////////////////////////

const MainBox = styled(Box)({
  padding:' 25px 20px',
})

const Sent = ( ) => {

  const[mails,setMails] = useState(null);
  const[refresh, setRefresh ] = useState(null);
  const[checkedMails, setCheckedMails] = useState([]);


  useEffect( () => {
    const getMail = async() => {
      const res = await getMails();
      setMails(res.data);
    }
    getMail();
  },[refresh]);

  const handleDeleteChecked = () => {
    moveMailToBin(selectedMails);
  }

  const onChangeCheckAll = (e) => {
    if(e.target.checked){
      const Emails = mails.map( mail => mail?._id );
      setCheckedMails(Emails);
    }
    else{
      setCheckedMails([]);
    }
  }

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
              <Box sx={{ display:'flex',alignItems:'center'}}>
                <Checkbox  onChange = { (e) => onChangeCheckAll(e) } />
                <DeleteOutline sx={{ cursor:'pointer' }} onClick = { handleDeleteChecked } />
              </Box>
              { mails && mails?.map( (mail,index) => {
                  return(
                    <SingleMail mail={mail} key={index} setRefresh={setRefresh} refresh={refresh}
                      checkedMails={checkedMails} setCheckedMails={setCheckedMails}
                      />
                    )
                  })}
            </> 
      }
    </MainBox>
  )
}

export default Sent