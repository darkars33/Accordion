import React, {useState} from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [question, setQuestion]= useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and Answer of login</h3>
        <div className="info">
          {
            question.map((questions) =>{
              return <SingleQuestion key={question.id} {...questions}/>
            })
          }
        </div>
      </div>
    </main>
  );
}

export default App;
