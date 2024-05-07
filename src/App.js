
import './App.css';
//import ConsultaUsuario from './Componentes/ConsultaUsuario'; 
//import  { HeaderComponent, Footer, HeroSection, AboutSection, ServicesSection, FeaturesSection } from './Componentes/Telas/Academias';
import { HeaderComponent, Breadcrumbs, Team, SearchSection } from './Componentes/Telas/Academias/academia';

function App() {
  return (
    <div className="App">
     <HeaderComponent/>
     <Breadcrumbs/>
     <Team/>
    <SearchSection/>
    </div>
  );
}

export default App;
