import React from "react";
import './app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import { OrdenadoresPage } from "./pages/ordenadores-page/ordenadores-page";
import { PortatilesPage } from "./pages/portatiles-page/portatiles-page";
import { PerifericosPage } from "./pages/perifericos-page/perifericos-page";
import { ShoppingCart } from "./components/shopping-cart-component/shopping-cart";
import { ProductsProvider } from "./shared/products-context";

interface Product {
  id: number;
  picUrl: string;
  title: string;
  price: number;
}

export const App = () => {

  const [productList, setProductList] = React.useState<Product[]>();

  const [shoppingClosed, setShoppingClosed] = React.useState<boolean>(false);

  const shoppingCart = React.useRef<HTMLDivElement>();

  const handleCloseShoppingCart = () => {

    !shoppingClosed? shoppingCart.current.classList.add('closed'): shoppingCart.current.classList.remove('closed');

    setShoppingClosed(!shoppingClosed);
    
  }
  
  return (
    <ProductsProvider value={{productList, setProductList}}>
      <div className="app-container">
        <div className="main-page">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/ordenadores" element={<OrdenadoresPage/>}/>
              <Route path="/portatiles" element={<PortatilesPage/>}/>
              <Route path="/perifericos" element={<PerifericosPage/>}/>
            </Routes>
          </Router>
        </div>
        <div className="shopping-cart" ref={shoppingCart}>
          <ShoppingCart handleClose={handleCloseShoppingCart}/>
        </div>
      </div>
    </ProductsProvider>
  );
};