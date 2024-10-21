import React, { useState } from 'react'
import '../CountryCss/Country.css'

export default function Country({country, handleVisitCountry, handleVisitFlag}) {
    const {name, flags} = country;

    const [visited, setVisited] = useState(false);
    
    const handleClick = () => {
        setVisited(!visited);
    }
    
    
  return (
    <>
    <div className={` text-xl country ${visited && "bg-visited"}`}>Country Name: {name.common}
    <img src={flags.png} alt="flage image" />
    <button onClick={handleClick} className={`btn mt-4 ${visited && "visiteds"}`}>{visited?"Visited": "Visit Country"}</button>
    {visited ? "visited This country" : "I want to visit this country"}
    <br /><button onClick={()=>handleVisitCountry(country)} className='btn'>Mark Visited</button>
    <br /><button onClick={()=>handleVisitFlag(flags)} className='btn'>Mark Flag</button>
    </div>
    </>
)
}
