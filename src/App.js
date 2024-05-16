
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import ConsultaUsuario from './Componentes/ConsultaUsuario'; 
import Personal from "./Componentes/Telas/Personal/personal"
import Home from"./Componentes/Telas/Home/home"
import Academia from "./Componentes/Telas/Academias/academia"
import Nutricao from './Componentes/Telas/Nutricao/nutricao'
import Saudemental from './Componentes/Page/saudemental';

function App() {
  return (
   <BrowserRouter>
   <Routes>
 
 
    <Route path='/' element={<Home/>}/>
 
    <Route path='/nutricao' element={<Nutricao/>}/>
 
    <Route path='/academia' element={<Academia/>}/>
 
    <Route path='/personal' element={<Personal/>}/>

    <Route path='/saudemental' element={<Saudemental/>}/>

    </Routes>
   </BrowserRouter>
  );
}
 
export default App;
 