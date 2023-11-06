import React, {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

function Question({title, info}) {
          const [read, setRead] = useState(false);

          const handlePlus = () =>{
                    setRead(!read);
          }
          const handleMinus = () =>{
                    setRead(false);
          }
  return (
    <article className="question">
          <header>
                    <h4>{title}</h4>
                    {
                              read ? <button className="btn" onClick={handleMinus}><AiOutlineMinus/></button> : <button className="btn" onClick={handlePlus}><AiOutlinePlus/></button>
                    }
          </header>
          <p>{read ? info : null}</p>
    </article>
  )
}

export default Question;