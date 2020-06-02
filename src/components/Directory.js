import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Directory.css';
import axios from 'axios'; 




function Directory (props) {

  const sortEmployees = (value) => {
 

    let sortedFunc = sortEmployees.sort(value);

    if (value === "Last Name") {
        sortedFunc.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
    } else if (value === "First Name") {
        sortedFunc.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1);
    } if (value === "First Name") {
      sortedFunc.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
    } else if (value === "Last Name") {
      sortedFunc.sort((a, b) => (a.name.last > b.name.last) ? -1 : 1);
  }; 
    return sortedFunc;
  };  

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=25&nat=us')
  .then(function (response) {
    console.log(response)
    sortEmployees(response.data.name)
  }).catch(function(error) {
    console.log(error)
  });
}); 
  

  return (

    <Table striped bordered hover variant="dark">
      
    <thead>
      <tr>
        <th></th>
        <th>Last Name <button className="sortButton" onChange={e => (sortEmployees(e.currentTarget.textContent))}>Sort A-Z</button></th>
        <th>First Name <button className="sortButton" onChange={e => (sortEmployees(e.currentTarget.textContent))}>Sort A-Z</button></th>
        <th>City, State</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>


    <tbody>
    {props.employees.map((props) => {
          return (<tr key={props.id.value}>    
          <td><img src={props.picture.thumbnail} alt="employee"/> </td>
          <td>{props.name.last}</td>
          <td>{props.name.first} </td>
          <td>{props.location.city + ", " + props.location.state}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          </tr>)
 })}
        
    </tbody>  
   
  </Table>
   
  )};


export default Directory; 