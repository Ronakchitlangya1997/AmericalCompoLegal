import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from "axios";
import {Navigate} from "react-router-dom";
import {Header} from './components/Header';
import {Home} from './components/Home';
import {About} from './components/about';
import {Expertise} from './components/expertise';
import {Contact} from './components/contact';
import {Earplugs} from './components/3MEarplugs';
import {Footer} from './components/footer';
import {Zantac} from './components/Zantac';
import {Nec} from './components/NEC';
import {camp1} from './components/camp';
import {Camplejeune} from './components/Camplejeune';
import {Hairrelaxer} from './components/hairrelaxer';
import {Talcum} from './components/Talcum';
import './components/header.css'
import './components/about.css'
import './components/expertise.css'
import './components/contact.css'
import './components/footer.css'

function App() {
  document.title = "American Compo Legal"
  return (
    <BrowserRouter>   
    <div className="App">
    <Header></Header>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/paraquat" element={<Earplugs/>}/>
            <Route path="/zantac" element={<Zantac/>}/>
            <Route path="/nec" element={<Nec/>}/>
            <Route path="/camplejeune" element={<Camplejeune/>}/>
            <Route path="/hairrelaxer" element={<Hairrelaxer/>}/>
            <Route path="/talcum" element={<Talcum/>}/>
            
        </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
