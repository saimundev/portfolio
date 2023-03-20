import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Details from './components/details/Details';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/details/:id' element={ <Details/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
