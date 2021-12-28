import React from "react";

interface Product {
   id: number;
   picUrl: string;
   title: string;
   price: number;
}

interface ProductContext {
   productList: Product[];
   setProductList: (value: Product[]) => void;
}

const ProductContext = React.createContext<ProductContext>(null);

export const ProductsProvider = ProductContext.Provider;
export const ProductsConsumer = ProductContext.Consumer;

export default ProductContext;
