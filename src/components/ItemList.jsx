import React from "react";
import Item from './Item';
import { Container, Row } from 'react-bootstrap';
import { productListData } from "./ProductListData";


const ItemList = ({productos}) => {   
    return(
        <Container>
            <h1 className="bienvenidosH">Bienvenidos a AFK'S Store</h1>
            <h2 className="bienvenidosH">Juegos Switch</h2>
        <Row xs={1} md={5} className="g-4 mt-1">
        {productos.map((items) => {return (<div key={items.id}><Item  item={items}/></div>)})}    
            </Row>
        </Container>
    ) 
}

export default ItemList;