import React, {useState, useEffect} from 'react';
import axios from "axios";
import Starwardcard from "./Starwardcard";
import { Container, Row} from "reactstrap";


        
        const  ChangeThis = () => {
          // Add your function name here
          const [info, setInfo] = useState([]);

          useEffect(() => {
            axios
              .get("https://swapi.co/api/people")
              .then(res => {
                console.log("API Is Here: ", res.data); // This will print out a message
                setInfo(res.data.results);
              })

              .catch(error => {
                console.log("Whoops go back, thats an error!", error);
              });

          }, []);
          console.log(info);
             //This is make sure to show something on the screen

          return (
            <Container>
              <Row>
             { info.map(infos => {
               return (
                 <Starwardcard
                  name = { infos.name}
                  height = { infos.height}
                  mass = { infos.mass}
                  hair = { infos.hair_color}
                  skin = { infos.skin_color}
                 />
               )

             })
            }
            </Row>
            </Container>
          )

        }

        export default ChangeThis;