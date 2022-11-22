import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Avtar from './Avtar';
import '../App.css'
function Home() {

const [data,setData]=useState([]);

const fetchData=async()=>{
const {data}=await axios.get("https://jsonplaceholder.typicode.com/albums");
setData(data);
}

useEffect(()=>{
fetchData();
},[]);

console.log(data);

  return (
    <div className='main-container'>

    {
      data.map((item)=>{

        return(
          <div className='frame-div'>
          <Avtar/>
          {/* <p><strong>Title : </strong>{item.title}<br/></p>  */}
          <Button variant="outline-primary" size="lg">Add To Profile</Button>
          </div>   
        )
      })
    }
    
    </div>

  )
}

export default Home