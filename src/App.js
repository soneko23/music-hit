import { dataOne } from './dataOne';
import { dataTwo } from './dataTwo';
import { useState } from 'react';
import './App.css';

function App() {
  const [singer, setSinger] = useState(dataOne);
  const [photos, setPhotos] = useState(0);
  const {photo} = dataTwo[photos];
  
  const removeItem = (id) => {
    let newTop = singer.filter(music => music.id !==id);
    setSinger(newTop)
  }

  const previousPerson = () => {
    setPhotos ((photos => {
      photos--;
      if (photos<0) {
        return dataTwo.length-1;
      }
      return photos;
    }))
  }

  const nextPerson = () => {
    setPhotos (( photos => {
      photos++;
      if (photos>dataTwo.length-1) {
        photos=0;
      }
      return photos;
    }))
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
    <div className="header">
      <h3>Ukrainian singers</h3>
    </div>
    <div className="header">
      <button className='btn btnNext' onClick={previousPerson}>Back</button>
      <div className="header">
        <img src={photo} width="400px" height="200px" alt='singer'/>
      </div>
      <button className='btn btnNext' onClick={nextPerson}>Next</button>
    </div>
  </div>);
}

export default App;
