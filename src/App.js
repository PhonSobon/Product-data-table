
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTables';
function App() {
  return (
    <>
     <div className='d-flex flex-column align-items-center'>
        <h1>React DataTable</h1>
     </div>
     <ProductTable/>
    </>
  );
}

export default App;
