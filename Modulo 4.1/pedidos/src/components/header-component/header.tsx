import React from "react";
import './header.scss';
import { Button, Col, Form, Row } from "react-bootstrap";

import PedidoContext from "../../shared/pedidos-context";

interface Pedido {
   id: number;
   proveedor: string;
   fecha: Date;
   total: number;
   estado: boolean;
   descripcion: string;
}

export const Header = () => {

   const pedidoContext = React.useContext(PedidoContext);

   const [valid, setValid] = React.useState(false);

   const [idValid, setIdValid] = React.useState(true);

   const handleSubmit = (event) => {

      event.preventDefault(); 
      
      const form = event.currentTarget;

      let pedido: Pedido = {
         id: form.formGridNumero.value,
         proveedor: form.formGridProveedor.value,
         fecha: form.formGridDate.value,
         total: form.formGridImporte.value,
         estado: form.formGridCheckbox.checked,
         descripcion: form.formGridDescripcion.value
      };
         
      let pedidos: Pedido[] = pedidoContext.pedidoList? [...pedidoContext.pedidoList]: [];
      pedidos.push(pedido);
      pedidoContext.setPedidoList(pedidos);

      form.reset();
      setValid(false); 

   };

   const handleChange = (event) => {
      
      const form = event.currentTarget;

      let isValid: boolean = form.checkValidity();

      let pedidos: Pedido[] = pedidoContext.pedidoList? [...pedidoContext.pedidoList]: [];

      if(pedidos.filter(pedido => pedido.id === form.formGridNumero.value).length > 0) {
         isValid = false;      
         setValid(false);   
      } 

      setValid(form.checkValidity());

      if(form.checkValidity() && pedidos.filter(pedido => pedido.id === form.formGridNumero.value).length > 0) {
         setIdValid(false);
         setValid(false);
      } else {
         setIdValid(true);
      }

   }

   return <div className="header-container">
            <h1 className="title">Pedido a proveedor</h1>
            <div className="header-form">
               <Form onSubmit={handleSubmit} onChange={handleChange}>
                  <Row className="mb-3">
                     <Form.Group as={Col} controlId="formGridNumero">
                        <Form.Label>Numero</Form.Label>
                        <Form.Control required 
                                      isInvalid = {!idValid} 
                                      type="number" 
                                      min="0"/>
                        <Form.Control.Feedback type="invalid">
                           Ya existe un pedido con este id
                        </Form.Control.Feedback>
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridProveedor">
                        <Form.Label>Proveedor</Form.Label>
                        <Form.Control required type="text" placeholder="Proveedor" />
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control required type="date" />
                     </Form.Group>
                  </Row>

                  <Row className="mb-3">
                     <Form.Group as={Col} controlId="formGridImporte">
                        <Form.Label>Importe total</Form.Label>
                        <Form.Control required type="number" min="0"/>
                     </Form.Group>

                     <Form.Group as={Col} className="formCheckbox">
                        <Form.Check type="checkbox" label="Estado" id="formGridCheckbox"/>
                     </Form.Group>
                  </Row>
                  <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridDescripcion">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control required type="input"/>
                     </Form.Group>
                  </Row>
                  <Row className="mb-3">
                     <Form.Group as={Col} id="formGridButton">
                        <Button className="formButton" 
                                variant="primary" 
                                type="submit"
                                disabled={!valid}>
                           Añadir a la lista
                        </Button>
                     </Form.Group>
                  </Row>
               </Form>
            </div>
          </div>;
}
