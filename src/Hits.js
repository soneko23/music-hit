import { dataOne } from "./dataOne";
import { useState } from "react";
import "./App.css";

function Hits() {
    const [singer, setSinger] = useState(dataOne);

    const removeItem = (id) => {
        let newTop = singer.filter(music => music.id !==id);
        setSinger(newTop)
      }

      return (<div>
        <div className="header">
          <h1>Top-{singer.length} Ukrainian hits</h1>
        </div>
        {singer.map((element => {
          const {id, name, music, image} = element;
    
          return (<div className='header' key={id}>
    
            <div className="container">
              <h2 className='numb'>{id}</h2>
              <img src={image} width="70px" height="70px" alt='singer'/>
              <div>
                <h2>{name}</h2>
                <h2>{music}</h2>
              </div> 
            </div>
            <div className='header'>
            <button className='btn' onClick={() => removeItem(id)}>Delete</button>
            </div>
          </div>)
        }))}
        <div className='header'>
          <button className='btnDel' onClick={()=>setSinger([])}>Delete all</button>
        </div>
    </div>)
}

export default Hits;