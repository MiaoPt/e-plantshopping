
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import { useState } from "react";

function App() {
  const [page, setPage] = useState('landing');
  const goToProducts = () => {setPage('products')};
  
  return (
     
    <>
      {page === 'landing' && <AboutUs goToProductsParam={goToProducts} />};
      {page === 'products' && <ProductList />};

    </>
   
  );
}

export default App;
