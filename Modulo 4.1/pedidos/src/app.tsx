import React from "react";
import './app.scss';
import { Header } from "./components/header-component/header";
import { PedidoList } from "./components/pedido-list-component/pedido-list";
import { PedidosProvider } from "./shared/pedidos-context";

interface Pedido {
  id: number;
  proveedor: string;
  fecha: Date;
  total: number;
  estado: boolean;
  descripcion: string;
}

export const App = () => {

  const [pedidoList, setPedidoList] = React.useState<Pedido[]>();
  
  return (
      <div className="app-container">
        <PedidosProvider value={{pedidoList, setPedidoList}}>
          <Header/>
          <PedidoList/>
        </PedidosProvider>
      </div>
  );
};