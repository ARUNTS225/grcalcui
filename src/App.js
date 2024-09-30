import './App.css';
// import Home from './Pages/home';
import Calculator from "./Pages/calc";
import Blog from './Pages/blog';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <h1 class="navbar-brand" style={{textDecoration:"none", color:"#78493e",fontFamily:"cursive"}}><b>GR Calc</b></h1>
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <h6 class="me-3"><Link to={'/'} style={{textDecoration:"none", color:"grey",fontFamily:"cursive"}}>Home</Link></h6>
    
    <h6><Link to={'/about'} style={{textDecoration:"none", color:"grey",fontFamily:"cursive"}}>About</Link></h6>
       </div>
  </div>
      </nav>
      <Routes>
        <Route  path='/' element={<Calculator />}/>
        <Route  path='/about' element={<Blog />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
