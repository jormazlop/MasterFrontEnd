import React from "react";
import './perifericos.scss';

import Checkbox from '@mui/material/Checkbox';
import { ShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import ProductContext from "../../shared/products-context";

interface Product {
   id: number;
   picUrl: string;
   title: string;
   price: number;
}

export const PerifericosComponent = () => {

   const productContext = React.useContext(ProductContext);

   const [perifericos, setPerifericos] = React.useState<Product[]>([]);

   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

   React.useEffect(() => {    

      const url = 'http://localhost:3030/perifericos';
      
      fetch(url)
         .then(response => response.json())
         .then(response => {            
            setPerifericos(response);  
        })
        .catch(error => {
         setPerifericos([]); 
      });
   }, []);

   const perifericoList = () => {

      const list = [];     

      const modifyProduct = (ordenador: Product) => {
         let products: Product[] = productContext.productList? [...productContext.productList]: [];
         
         if(!productContext.productList
          || productContext.productList.filter(product => product.id === ordenador.id).length === 0) {           
            products.push(ordenador);
            productContext.setProductList(products);
         } else {
            products = products.filter(product => product.id !== ordenador.id);
            productContext.setProductList(products);
         }
      
      }

      for(const periferico of perifericos) {

         const selected = productContext.productList? 
               productContext.productList.filter(product => product.id === periferico.id).length > 0
             : false;
         
         list.push(
         <div key={periferico.id} className="periferico-item">
            <img src={periferico.picUrl} alt="Image"/>
            <h1>{periferico.title}</h1>
            <p>Precio: {periferico.price}€</p>
            <Checkbox {...label} 
                      icon={<ShoppingCart/>} 
                      checkedIcon={<RemoveShoppingCart/>} 
                      onClick={e => modifyProduct(periferico)} checked={selected}/>
         </div>)
      }

      return list;
   }

   return <div className="perifericos-container">{perifericoList()}</div>;

}