import { useState, React} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom';
import { Box } from "@mui/material";


const Home = () => {
  const[open,setOpen ] = useState(true);
  return (
    <>
        <Header setOpen={ setOpen } />
        <Sidebar open = { open } setOpen = { setOpen } />
        <Box sx={{ margin:'4rem 1rem 0 15rem', background:'#fff',height:'calc(100vh - 5rem)', width:'calc(100vw - 16rem)', borderRadius:3}}>
            <Outlet/>
        </Box>

    </>
  )
}

export default Home