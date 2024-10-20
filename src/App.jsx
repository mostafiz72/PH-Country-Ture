import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function  App() {
  const [myCountry, setMyCountry] = useState([]);
  console.log(myCountry[0]);
  
  

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
     .then(response => response.json())
     .then(data => setMyCountry(data));
  }, [])

  return (
    <div className=' text-2xl text-red-600 font-bold text-center'>All Data here</div>
    {myCountry.map((country, index) => (
      <div key={index}></div>
      )
    }
  )
