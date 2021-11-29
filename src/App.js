import{BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';

import Home from "./pages";
import SigninPage from './pages/signin'
import CabinetPage from './pages/cabinet'

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SigninPage} exact/>
        <Route path="/cabinet" component={CabinetPage} exact/>
      </Switch>
  
    </Router>
  );
}

export default App;
