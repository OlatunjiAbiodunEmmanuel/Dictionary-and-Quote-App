import Contact from './Contact';
import { Support } from './Support';
import Home from './Home';
import Error404 from './Error404';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Link } from 'react-router-dom'
import Fooo from './fooo';


function App() {

  return (
    <div style={{background:'white',height:"100vh"}}>
    <BrowserRouter>
    <h1 style={{textAlign:'center'}}>THAT9JABOY3</h1>

    <div className='container-sm ' style={{display:'flex',justifyContent:'space-around',alignItems:'center', backgroundColor:'red',height:'4rem',borderBottomLeftRadius:'45px',borderTopRightRadius:'45px'}}>
        <div class="btn btn-lg"><Link  style={{color:'white', textDecoration:'none'}} to ='/'>Home</Link></div>
        <div class="btn btn-lg"><Link  style={{color:'white', textDecoration:'none'}} to ='/About'>Dictionary</Link></div>
        <div class="btn btn-lg d-none d-md-flex"><Link  style={{color:'white', textDecoration:'none'}} to ='/Contact'>Word of wisdom</Link></div>
        <div class="btn btn-lg d-none d-md-flex"><Link  style={{color:'white', textDecoration:'none'}} to ='/Support'>Support</Link></div>
        <div style={{backgroundColor:'white',height:'70%',width:'3px'}}></div>
    </div>
    <div style={{background:'yellow',textAlign:'center'}}>DEVELOPED BY THAT9JABOY3. DEFINE YOUR STYLE</div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<Fooo/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Support' element={<Support/>}/>
      <Route path='*' element={<Error404/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
