import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ShowUser(){
   const[data,setData]=useState([]);
   function demo(){
      fetch('http://localhost:8080/data').then((result)=>{
         result.json().then((res)=>{
            setData(res)
         })
      })
   }
 useEffect(()=>{
   demo()
 })
 function del(id){
  fetch(`http://localhost:8080/data/${id}`,{
   method:'DELETE',

  }).then((result)=>{
   result.json().then((res)=>{
      console.log(res)
   })

   demo()
  })

 }
 function edit(id){
  window.localStorage.setItem('st',JSON.stringify(id))
 }
 return(
    <>
    <i>Showuser</i>
    <table className="table table-hover">
      <tr className="bg-danger">
         <th>ID</th>
         <th>NAME</th>
         <th>Email</th>
         <th>NUMBER</th>
         <th>ADDRESS</th>
         <th>Edit</th>
         <th>DELETE</th>
      </tr>
      {

         data.map((item,index)=>
         <tr key={item._id}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.number}</td>
            <td>{item.address}</td>
            <Link to="/update"><td><button className="bg-primary" onClick={()=>edit(index)}>Edit</button></td></Link>
            <td><button className="bg-danger" onClick={()=>del(item._id)}>Delete</button></td>
            
         </tr>
         )
         
      }
    </table>
    
    </>
 )
}