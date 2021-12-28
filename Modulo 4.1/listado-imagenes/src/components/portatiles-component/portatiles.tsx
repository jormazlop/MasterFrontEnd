import React from "react";
import './portatiles.scss';

import Checkbox from '@mui/material/Checkbox';
import { ShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import ProductContext from "../../shared/products-context";

interface Product {
   id: number;
   picUrl: string;
   title: string;
   price: number;
}

export const PortatilesComponent = () => {

   const productContext = React.useContext(ProductContext);

   const [portatiles, setPortatiles] = React.useState<Product[]>([]);

   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

   React.useEffect(() => {    

      const url = 'http://localhost:3030/portatiles';
      
      fetch(url)
         .then(response => response.json())
         .then(response => {            
            setPortatiles(response);  
        })
        .catch(error => {
         setPortatiles([]); 
      });
   }, []);

   const portatilList = () => {

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

      for(const portatil of portatiles) {

         const selected = productContext.productList? 
               productContext.productList.filter(product => product.id === portatil.id).length > 0
             : false;
         
         list.push(
         <div key={portatil.id} className="portatil-item">
            <img src={portatil.picUrl} alt="Image"/>
            <h1>{portatil.title}</h1>
            <p>Precio: {portatil.price}€</p>
            <Checkbox {...label} 
                      icon={<ShoppingCart/>} 
                      checkedIcon={<RemoveShoppingCart/>} 
                      onClick={e => modifyProduct(portatil)} checked={selected}/>
         </div>)
      }

      return list;
   }

   return <div className="portatiles-container">{portatilList()}</div>;

}