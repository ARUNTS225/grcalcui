import './App.css';
import Calculator from "./Pages/calc";
import Blog from './Pages/blog';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div class="container">
      
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <h1 class="navbar-brand" style={{textDecoration:"none", color:"#78493e",fontFamily:"cursive"}}><b>Gold-Rate-Calc</b></h1>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse m-3" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <h6 class="me-3"><Link to={'/'} style={{textDecoration:"none", color:"grey",fontFamily:"cursive"}}>Calculator</Link></h6>
    
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
