import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function CreateUser() {
const[name,setName]=useState('')   
const[email,setEmail]=useState('')   
const[number,setNumber]=useState('')   
const[address,setAddress]=useState('') 

const register=async()=>{
 let result=await fetch('http://localhost:8080/register',{
  'method':'POST',
  headers:{
      'Content-Type':'application/json'
  },
  body:JSON.stringify({name,email,number,address})
 })
 result=await result.json()
 console.log(result)
 }
  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>
            Name:<MDBInput wrapperClass='mb-4'  id='form1' type='text' value={name} onChange={(e)=>setName(e.target.value)}/> 
            Email:<MDBInput wrapperClass='mb-4'  id='form1' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              Number:<MDBInput wrapperClass='mb-4'  id='form1' type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
              Address:<MDBInput wrapperClass='mb-4'  id='form2' type='address' value={address} onChange={(e)=>setAddress(e.target.value)}/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              </div>
           <Link to="/show"><MDBInput type="button" value="Click Me!" id='form2' onClick={register}/></Link> 
              

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default CreateUser;