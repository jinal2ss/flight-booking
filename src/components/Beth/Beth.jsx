import React from 'react';
import './beth.css';
import Kina from "../../assets/kina.png";
import Kina2 from "../../assets/kina2.png";
import Kina3 from "../../assets/kina3.png";
import Kina4 from "../../assets/kina4.png";

const Beth = () => {
  return (
    <div className='beth container mx-auto'>
      <div className="card-container flex justify-between">
        <div className="d-card">
          <img src={Kina} alt="mountain" />
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
          <h2>Kina Mountain</h2>
          <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <span>Cambodia</span>
          </div>
        </div>
        <div className="d-card">
          <img src={Kina2} alt="mountain" />
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
          <h2>Kina Mountain</h2>
          <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <span>Cambodia</span>
          </div>
        </div>
        <div className="d-card">
          <img src={Kina3} alt="mountain" />
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
          <h2>Kina Mountain</h2>
          <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <span>Cambodia</span>
          </div>
        </div>
        <div className="d-card">
          <img src={Kina4} alt="mountain" />
          <div className="rate">
            <i class="fa-solid fa-star"></i>
            <span>3.4</span>
          </div>
          <h2>Kina Mountain</h2>
          <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <span>Cambodia</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beth