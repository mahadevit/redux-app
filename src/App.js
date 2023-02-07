 
import './App.css';
import  {MainHeaders} from './containers/MainHeaders';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import { ProductListing } from './containers/ProductListing';
import {ProductDetail} from './containers/ProductDetail'
import {Home} from './components/Home'

function App() {
  return (
    <div className="App">
      
      <Router>
{/*     
         <MainHeaders/> */}
         <Routes>             
            <Route path="/" element={<ProductListing/>}/>
            <Route path="/product/:productId" element={<ProductDetail/>}/>
            <Route>404</Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
