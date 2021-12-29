import React from "react";

interface Pedido {
   id: number;
   proveedor: string;
   fecha: Date;
   total: number;
   estado: boolean;
   descripcion: string;
}

interface PedidoContext {
   pedidoList: Pedido[];
   setPedidoList: (value: Pedido[]) => void;
}

const PedidoContext = React.createContext<PedidoContext>(null);

export const PedidosProvider = PedidoContext.Provider;
export const PedidosConsumer = PedidoContext.Consumer;

export default PedidoContext;
