
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import ConsultaUsuario from './Componentes/ConsultaUsuario'; 
import Personal from "./Componentes/Telas/Personal/personal"
import Home from"./Componentes/Telas/Academias/home"
import Academia from "./Componentes/Telas/Academias/academia"
import Nutricao from './Componentes/Telas/Nutricao/nutricao'
function App() {
  return (
   <BrowserRouter>
   <Routes> 
    <Route path='/' element={<Home/>}/>
      <Route path='/nutricao' element={<Nutricao/>}/>
      <Route path='/academia' element={<Academia/>}/>
      <Route path='/personal' element={<Personal/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
