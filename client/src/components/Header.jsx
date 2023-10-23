import React from 'react'
import { Box, AppBar,Toolbar, InputBase} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useNavigate } from 'react-router-dom';

const Header = ( { setOpen } ) => {

    const logoImg = 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png';
    const navigate = useNavigate();

    const handleToggleSidebar = () => {
      setOpen(prev => !prev);
    }

  return (
    <>
        <AppBar position="fixed" sx={{ background:'transparent !important',boxShadow:'none' ,heigh:'4rem'}}>
          <Toolbar sx={{ display:'flex', justifyContent:'space-between',gap:2}}>

            <Box sx={{ display:'flex', gap:2, alignItems:'center'}}>
                <MenuIcon color='action' sx={{ cursor:'pointer'}} onClick = { handleToggleSidebar }/>
                <img src={logoImg} alt="logo" onClick={ () => navigate("/")} style={{ cursor:'pointer'}}/>
            </Box>

            <Box sx={{ background:'#EAF1FB', display:'flex', alignItems:'center', borderRadius:5,padding:'5px 15px',width:"40rem"}}>
                <SearchIcon color='action' sx={{ cursor:'pointer',marginRight:1}}/>
                <InputBase sx={{ width:"100%"}} placeholder='Search mail'/>
            </Box>

            <Box sx={{ display:'flex', gap:2}}>
                <SettingsIcon color='action' sx={{ cursor:'pointer'}}/>
                <AccountCircleIcon color='action' sx={{ cursor:'pointer'}}/>
                <AppsIcon color='action' sx={{ cursor:'pointer'}}/>
                <HelpOutlineOutlinedIcon color='action' sx={{ cursor:'pointer'}}/>
            </Box>

          </Toolbar>
        </AppBar>
    </>
  )
}

export default Header