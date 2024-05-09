
import { NavItem } from 'react-bootstrap';
import './App.css';
//import { Team } from './Componentes/Telas/Academias/academia';
//import ConsultaUsuario from './Componentes/ConsultaUsuario'; 
//import  { HeaderComponent, Footer, HeroSection, AboutSection, ServicesSection, FeaturesSection } from './Componentes/Telas/Academias';
//import { HeaderComponent, Breadcrumbs, Team, SearchSection } from './Componentes/Telas/Academias/academia';
//import {Header,NavBar,NavItem, Breadcrumbs,Teams, ContactForm,Footer} from "./Componentes/Telas/Academias/nutricao";
import {Header,Breadcrumbs, NavBar} from "./Componentes/Telas/Academias/personal";

function App() {
  return (
    <div className="App">
      <NavItem/>
      <NavBar/>
    <Header/>
    <Breadcrumbs/>
    </div>
  );
}

export default App;
