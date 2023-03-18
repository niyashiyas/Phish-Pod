import React from 'react';
import {useState} from "react";
import './Glossary.css'
export default function Glossary() {

  const [cards] = useState([
    {
      title:"Card-1",
    data:"Random Content"
    },
    {
      title:"Card-2",
    data:"Random Content"
    },
    {
      title:"Card-3",
    data:"Random Content"
    },
    {
      title:"Card-4",
    data:"Random Content"
    },
    {
      title:"Card-5",
    data:"Random Content"
    },
    {
      title:"Card-6",
    data:"Random Content"
    }
  ])
  const [query,setQuery] = useState("")

  return (
    <div>

    <section>
        <div className='container'>
              <h1>Glossary</h1>
              <div className='search-bar'>
                <input className='search' placeholder='Search...' type="text" onChange={(e)=>setQuery(e.target.value)}/>
              </div>
              <br></br>
              <div className='cards'>
              {
                cards.filter((c)=>c.title.includes(query)).map((card,i)=>(
                  <div key={i} className='card'>
                  <h3>{card.title}</h3>
                  <p>
                    {card.data}
                  </p>
                </div>
                ))
              }  
              </div>
        </div>
    </section>
    </div>
    
  )
}