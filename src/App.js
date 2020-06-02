import Directory from './components/Directory'; 
import Header from './components/Header';
import Search from './components/Search';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
 



 function App() {
  
//Setting up table and adding filtering function

  const [employees, setEmployees] = useState([]);

  const [searchText, setFilter] = useState('');



  const filterEmployees = employees.filter((e) => {
    if(e.name.first.toLowerCase().includes(searchText.toLowerCase()) ) {
      return true;
    }
    else if(e.name.last.toLowerCase().includes(searchText.toLowerCase()) ) {
      return true;
    }
    else {
      return false
    }
  }); 

  useEffect(() => {
    axios('https://randomuser.me/api/?results=25&nat=us')
  .then(function(response) {
    setEmployees(response.data.results)
  })
  .catch(function (error) {
    console.log(error)
  })
  .then(function() {
 });
}, []) 


// Sorting states and function





  // const sortDirection = employees.ascending((e) => {
  //   if(e.name.first === 'descending')  {
  //     return true;
  //   }
  //  else if (e.name.first === 'ascending') {
  //     return true; 
  //   } else  {
  //     return false; 
  //   }); 



    // useEffect(() => {
    //   const state = useState; 
    //    console.log(state); 
    //  })

    // Rendered directory
  
  
  return (
    <div className="App">
        <Header />
        <Search setFilter={setFilter}/>
        <Directory employees={filterEmployees}/>
     
        
    </div>
   )
}


export default App; 







// constructor() {
//   super();
//   this.state = {
//       sortDirection: 'descending',
//       data: this.state.data.sort(descending)
//   };
// }

// sortData() {
//   if(this.state.sortDirection ==='descending') {
//       this.setState({ 
//           sortDirection: 'ascending',
//           data: this.name.last.sort(sortAscending)
//       });
//   } else {
//       this.setState({ 
//           sortDirection: 'descending',
//           data: this.name.last.sort(sortDescending)
//       });
// }
//     }


//     useEffect(() => {
//       const state = useState; 
//        console.log(state); 
//      })

     




  
  // useEffect(() => {
  //   const data = axios.get('https://randomuser.me/api/?results=25&nat=us')
  //     .then(function (response) {
  //       setEmployees(response.data.results);
  //     })
  //     .catch(function (error) {})
  // }, []);
   
        
         
    
    
  
  //   const results = await axios("https://randomuser.me/api/?results=25&nat=us")
  // }).then(function(response) {
  //     setEmployees(response.data.results);
  //   });
 
  //   setData(results.data);
  
