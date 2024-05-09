
import './App.css';
//import { Team } from './Componentes/Telas/Academias/academia';
//import ConsultaUsuario from './Componentes/ConsultaUsuario'; 
//import  { HeaderComponent, Footer, HeroSection, AboutSection, ServicesSection, FeaturesSection } from './Componentes/Telas/Academias';
//import { HeaderComponent, Breadcrumbs, Team, SearchSection } from './Componentes/Telas/Academias/academia';
import {Header,NavBar,NavItem, Breadcrumbs,Teams, ContactForm,Footer} from "./Componentes/Telas/Academias/nutricao";

function App() {
  return (
    <div className="App">
    <Header/>
    <NavBar/>
    <NavItem/>
    <Breadcrumbs/>
    <Teams/>
    <ContactForm/>
    <Footer/>
    </div>
  );
}

export default App;
