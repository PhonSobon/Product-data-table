
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTables';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
function App() {
  return (
    <>
     <NavbarComponent/>
     <ProductTable/>
     <FooterComponent/>
    </>
  );
}

export default App;
