import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inbox from "./pages/Inbox";
import Starred from "./pages/Starred";
import Bin from "./pages/Bin";
import Drafts from "./pages/Drafts";
import Sent from "./pages/Sent";
import Home from "./pages/Home";
import SingleMailBody from "./components/SingleMailBody";

function App() {

  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path = "/" element = { <Home/> } >
              <Route index element = { <Inbox/> } />
              <Route path = "/starred" element = { <Starred/> } />
              <Route path = "/sent" element = { <Sent/> } />
              <Route path = "/drafts" element = { <Drafts/> } />
              <Route path = "/bin" element = { <Bin/> } />
              <Route path = "/singlemailbody" element = { <SingleMailBody/> }/>
            </Route>
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
