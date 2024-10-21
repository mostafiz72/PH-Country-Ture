import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Country from './Country/Country';
import './Countrys.css'

export default function  App() {
  const [myCountry, setMyCountry] = useState([]);
  const [visistedCountrys, setVisitedCountries] = useState([]);
  const [visitFlag, setVisitedFlag] = useState([]);
  
  

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
     .then(response => response.json())
     .then(data => setMyCountry(data));
  }, [])

  const handleVisitCountry = (country) => {
    setVisitedCountries([...visistedCountrys, country]);
    
  }
  const handleVisitFlag = (flags) => {
    setVisitedFlag([...visitFlag, flags]);
    
  }

  return (

    <>
    <div className=' text-2xl text-red-600 font-bold text-center'>All Data here</div>
    <h2 className='container mx-auto text-2xl font-bold text-green-600'>Total Data: {myCountry.length}</h2>
    <h4 className='container mx-auto text-xl text-pink-700'>Visited Countrys: </h4>
    <div className=' container mx-auto'>
      <h3>Visited Countrys: {visistedCountrys.length}</h3>
      <ul>
        {
          visistedCountrys.map(country => <li key={country.name.common}>{country.name.common}</li>)
        }
      </ul>
      <div className='contris'>
        {visitFlag.map((flag, index) => <img width={100} key={index} src={flag.png} alt={flag.name}/>)}
      </div>
    </div>
    
    <div className=' container mx-auto country-container'>
      {
        myCountry.map(country => <Country key={country.name.common} country={country} handleVisitCountry={handleVisitCountry} handleVisitFlag={handleVisitFlag}></Country>) 
      }
    </div>
    </>    
    
  )
}