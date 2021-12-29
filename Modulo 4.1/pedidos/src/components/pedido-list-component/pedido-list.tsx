import React from "react";
import './pedido-list.scss';
import PedidoContext from "../../shared/pedidos-context";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";

interface Pedido {
   id: number;
   proveedor: string;
   fecha: Date;
   total: number;
   estado: boolean;
   descripcion: string;
}

export const PedidoList = () => {

   const pedidoContext = React.useContext(PedidoContext);

   const [checkboxSelected, setCheckboxSelected] = React.useState<boolean>(false);

   const [idsChecked, setIdsChecked] = React.useState<number[]>([]);

   const [showModalEnviar, setShowModalEnviar] = React.useState(false);

   const [showModalError, setShowModalError] = React.useState(false);

   const getRows = () => {

      let rows = [];

      if (pedidoContext.pedidoList) {

         rows = pedidoContext.pedidoList.map(pedido => {
            return {
               id: pedido.id, 
               proveedor: pedido.proveedor,
               fecha: pedido.fecha,
               total: pedido.total + '€',
               estado: pedido.estado? 'Valido': 'Pendiente',
               descripcion: pedido.descripcion
            };
         });

      }

      return rows;
   }

   const columns: GridColDef[] = [
      { field: 'estado', headerName: 'Estado', width: 130 },
      { field: 'descripcion', headerName: 'Descripcion', width: 330 },
      { field: 'total', headerName: 'Importe', width: 100 }
   ];

   const handleChange: (value: number[]) => void = (selectedIds: number[]) => {
      selectedIds.length > 0? setCheckboxSelected(true): setCheckboxSelected(false);

      setIdsChecked(selectedIds);
   }

   const handleCheck = () => {

      let pedidosChecked: Pedido[] = [];

      if (pedidoContext.pedidoList) {

         pedidosChecked = pedidoContext.pedidoList.map(pedido => {
            return {
               id: pedido.id, 
               proveedor: pedido.proveedor,
               fecha: pedido.fecha,
               total: pedido.total,
               estado: idsChecked.filter(id => id === pedido.id).length > 0? true: pedido.estado,
               descripcion: pedido.descripcion
            };
         });

      }

      pedidoContext.setPedidoList(pedidosChecked);
   } 

   const handleUnCheck = () => {

      let pedidosChecked: Pedido[] = [];

      if (pedidoContext.pedidoList) {

         pedidosChecked = pedidoContext.pedidoList.map(pedido => {
            return {
               id: pedido.id, 
               proveedor: pedido.proveedor,
               fecha: pedido.fecha,
               total: pedido.total,
               estado: idsChecked.filter(id => id === pedido.id).length > 0? false: pedido.estado,
               descripcion: pedido.descripcion
            };
         });

      }

      pedidoContext.setPedidoList(pedidosChecked);
   } 

   const handleEnviar = () => {

      const productosSelected: Pedido[] = pedidoContext.pedidoList.filter(pedido => idsChecked.includes(pedido.id));

      productosSelected.filter(pedido => pedido.estado === false).length > 0?
           setShowModalError(true)
         : setShowModalEnviar(true);
   }

   const handleCloseModalEnviar = () => {
      setShowModalEnviar(false);
   }

   const handleConfirmModalEnviar = () => {
      const productosNotSelected: Pedido[] = pedidoContext.pedidoList.filter(pedido => !idsChecked.includes(pedido.id));
      pedidoContext.setPedidoList(productosNotSelected);
      setShowModalEnviar(false);
   }

   const handleCloseModalError = () => {
      setShowModalError(false);
   }

   return <div>
            {checkboxSelected? 
            <div>
               <Button className="enviar-button" onClick={handleEnviar}>
                  Enviar
               </Button>
               <div className="validate-icons">
                  <FontAwesomeIcon icon={faCheck} onClick={handleCheck}/>
                  <FontAwesomeIcon icon={faWindowClose} onClick={handleUnCheck}/>
               </div>
            </div>: null}
            <Modal show={showModalEnviar} onHide={handleCloseModalEnviar}>
               <Modal.Header closeButton>
               <Modal.Title>Confirmar envio de pedidos</Modal.Title>
               </Modal.Header>
               <Modal.Body>¿Esta seguro de querer enviar los pedidos?</Modal.Body>
               <Modal.Footer>
               <Button variant="secondary" onClick={handleCloseModalEnviar}>
                  No
               </Button>
               <Button variant="primary" onClick={handleConfirmModalEnviar}>
                  Si
               </Button>
               </Modal.Footer>
            </Modal>
            <Modal show={showModalError} onHide={handleCloseModalError}>
               <Modal.Header closeButton>
               <Modal.Title>Error en algun pedido</Modal.Title>
               </Modal.Header>
               <Modal.Body>Alguno de los pedidos a enviar esta pendiente de validación.</Modal.Body>
               <Modal.Footer>
               <Button variant="primary" onClick={handleCloseModalError}>
                  Ok
               </Button>
               </Modal.Footer>
            </Modal>
            <div style={{ height: 400, width: '100%' }}>
               <DataGrid rows={getRows()}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        onSelectionModelChange={(ids: number[]) => handleChange(ids)}/>
            </div>
          </div>;
}