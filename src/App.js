import{HashRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';
import TeamPage from './pages/TeamPage'
import UserPage from './pages/UserPage'
import Home from "./pages";
import SigninPage from './pages/signin'
import CabinetPage from './pages/cabinet'
import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CoursesPage from "./pages/courses"
import GamePage from './pages/gameDev';
import KidsPage from "./pages/kidsPage"
import Footer from "./components/Footer";
import RegisterPage from "./pages/registerPage"
import ChoosePage from "./pages/chooseschool"
import FiberPage from "./pages/FiberPage"
function App() {
  const[isOpen,setIsOpen] =useState(false)
  const[schoolOpen,setShool]=useState(false)
console.log(process.env);
  const toggle= () => {
      setIsOpen(!isOpen)
  }
  const toggleSchool= () => {
    setShool(!schoolOpen)
}

  return (
    <Router >
       <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/"  exact>
          <Home toggle={toggleSchool}/>
        </Route>
        <Route path="/signin" component={SigninPage} />
        {/* <Route path="/cabinet" component={CabinetPage} /> */}
        <Route path="/team" component={TeamPage} exact/>
        <Route path="/team/:id" component={UserPage} />
        <Route path="/web" component={CoursesPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/kids" component={KidsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/chooseschool">
          <ChoosePage  schoolOpen={schoolOpen} toggleSchool={toggleSchool}/>
        </Route>
        <Route path="/chooseschool/:id" component={CabinetPage} />
        <Route path="/fiber" component={FiberPage} />
      </Switch>

    </Router>
  );
}

export default App;
