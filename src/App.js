import{HashRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';
import TeamPage from './pages/TeamPage'
import UserPage from './pages/UserPage'
import Home from "./pages";
import SigninPage from './pages/signin'
import CabinetPage from './pages/cabinet'
import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CoursesPage from "./pages/courses"
import GamePage from './pages/gameDev';
import KidsPage from "./pages/kidsPage"
import Footer from "./components/Footer";
function App() {
  const[isOpen,setIsOpen] =useState(false)

  const toggle= () => {
      setIsOpen(!isOpen)
  }
  return (
    <Router >
       <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SigninPage} />
        <Route path="/cabinet" component={CabinetPage} />
        <Route path="/team" component={TeamPage} exact/>
        <Route path="/team/:id" component={UserPage} />
        <Route path="/web" component={CoursesPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/kids" component={KidsPage} />
      </Switch>

    </Router>
  );
}

export default App;
