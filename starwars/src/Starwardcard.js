import React from 'react';
import { Entry} from "./Warstyles"
import { Col } from "reactstrap";


export default function Starwardcard (props) {
    return (
           <Col sm="6" md="4" lg="3" >
           <Entry>
                  <p>name = { props.name}</p>
                  <p>height = { props.height}</p>
                  <p>mass = { props.mass}</p>
                  <p>hair = { props.hair}</p>
                  <p>skin = { props.skin}</p>
           </Entry>
           </Col>
               
    )    
    
};

