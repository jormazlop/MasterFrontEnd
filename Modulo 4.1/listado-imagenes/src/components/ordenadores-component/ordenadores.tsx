import React from "react";
import './ordenadores.scss';

import Checkbox from '@mui/material/Checkbox';
import { ShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import ProductContext from "../../shared/products-context";

interface Product {
   id: number;
   picUrl: string;
   title: string;
   price: number;
}

export const OrdenadoresComponent = () => {

   const productContext = React.useContext(ProductContext);

   const [ordenadores, setOrdenadores] = React.useState<Product[]>([]);

   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

   React.useEffect(() => {    

      const url = 'http://localhost:3030/ordenadores';
      
      fetch(url)
         .then(response => response.json())
         .then(response => {            
            setOrdenadores(response);  
        })
        .catch(error => {
         setOrdenadores([]); 
      });
   }, []);

   const ordenadoresList = () => {

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

      for(const ordenador of ordenadores) {

         const selected = productContext.productList? 
               productContext.productList.filter(product => product.id === ordenador.id).length > 0
             : false;
         
         list.push(
         <div key={ordenador.id} className="ordenador-item">
            <img src={ordenador.picUrl} alt="Image"/>
            <h1>{ordenador.title}</h1>
            <p>Precio: {ordenador.price}€</p>
            <Checkbox {...label} 
                      icon={<ShoppingCart/>} 
                      checkedIcon={<RemoveShoppingCart/>} 
                      onClick={e => modifyProduct(ordenador)} checked={selected}/>
         </div>)
      }

      return list;
   }

   return <div className="ordenadores-container">{ordenadoresList()}</div>;

}