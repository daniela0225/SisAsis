import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Redirect } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col,  Modal, 
  ModalBody,
  ModalFooter,
  ModalHeader,Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Listado extends Component {
    
  constructor (props) {
    super(props);


   
    this.state = {
      school:'',
      records: [],
    messages:[]  

}
this.getschool();

}
 getschool = () => {
    axios.get('usuarios/headers', {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const dat = res.data.usuario;       
        
        console.log('Reconocio school')
        console.log(dat);     

        this.setState({ school: res.data.usuario.school._id });
        console.log(this.state.school);

        this.getRecords();
      })
      .catch( res => {
        console.log("ERROR SCHOOL");
       
        console.log(res);
      })


  }
  


  getRecords = () => {
    const url ='registros/recordsBySchool?schoolId='+this.state.school
    axios.get(url, {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const data = res.data.records;
        let records = this.state.records;
        console.log(data);

        for(let i = 0; i < data.length ; i++){
          console.log(data[i]);
         
          //console.log(edit);
          records.push(
            
              <tr key={Math.random()}>
                    <td><a href={'/#/Home/Students/Detail/'+data[i].student._id}>{data[i].student.name} {data[i].student.last_name}</a></td>
                    <td>{data[i].date}</td>
                    
                    <td>{(data[i].type === "CHECK_IN")?'ENTRADA':'SALIDA'}</td>
                    <td>
                    
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger" onClick={() => {


                          let url = 'registros/delete';
                          

                          const params = {
                            method: 'post',
                            url: url,
                            data: {
                              recordId: data[i]._id ,
                              
                            },
                            headers: {
                              "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
                            }
                          };

                          axios(params) 
                          .then( (response) => {
                            //handle success
                           window.location.reload();   

                            
                            console.log(response);
                          })
                          .catch( (response) => {
                           
                            console.log(response);
                          });
                     }}>Eliminar</Button>
                    
                    
                     </Col>
                    </td>
                   
                  </tr>
          );
        }

        this.setState({ records: records });

      })
      .catch( res => {
     
        console.log(res);
      })
  }
  




  render() {
    return (
      <div className="animated fadeIn">
      
       <Card>
              <CardHeader>
                  
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                 <a href="/#/Home/Records/Form"><Button block color="success">Nuevo Registro</Button></a>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Alumno</th>
                    <th>Fecha</th>
                    
                    <th>Tipo de registro</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                   { (this.state.records !== null)?this.state.records:(<tr><td></td></tr>) }
                 
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
       

      </div>


    );
  }
}

export default Listado;
