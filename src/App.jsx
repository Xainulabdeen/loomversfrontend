import Home from './pages/Home'// story board read articles
import About from './pages/About'//about us abc team 
import StoryBoard from './pages/StoryBoard'// become a writer
import GetStarted from "./pages/GetStarted"//login
import Help from "./pages/Help"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

const App = () => {
  return (
<>

          <BrowserRouter>
          <Outlet  />{<Navbar/>}
          <Routes>
          
              <Route path="/" element={ <Home /> }/>
              <Route path="/About" element={ <About /> }/>
              <Route path="/StoryBoard" element={ <StoryBoard /> }/>
              <Route path="/GetStarted" element={ <GetStarted /> }/>
              <Route path="/Help" element={ <Help /> }/>

          </Routes>
          <Outlet  />{<Footer/>}
          </BrowserRouter>

  </>
  )    
}

export default App;