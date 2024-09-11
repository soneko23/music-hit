import { dataTwo } from "./dataTwo";
import { useState } from "react";
import './App.css';

function Singers() {
    const [photos, setPhotos] = useState(0);
    const {photo} = dataTwo[photos];

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

      return(<div>
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

export default Singers;