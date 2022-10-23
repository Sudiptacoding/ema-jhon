import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageError from './Components/FageError/PageError';
import Header from './Components/Header/Header';
import Inventori from './Components/Inventori/Inventori';
import ProductDetail from './Components/ProdectDetail/ProductDetail';
import Review from './Components/Review/Review';
import Shop from './Components/Shop/Shop';



function App() {
  return (
    <div>
     <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path='/shop'  element={ <Shop></Shop>} > </Route>
        <Route path='/review'  element={ <Review></Review>} > </Route>
        <Route path='/manage'  element={<Inventori></Inventori>} > </Route>
        <Route path='/'  element={ <Shop></Shop>} > </Route>
        <Route path='/product/:productkey'  element={ <ProductDetail></ProductDetail>} > </Route>        
        <Route path='*'  element={ <PageError></PageError>} > </Route>

      </Routes>
      </BrowserRouter>


     
   </div>
  );
}

export default App;
