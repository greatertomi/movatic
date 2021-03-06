import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';

const BikesAvailable = () => {
  return (
    <div className="card bikesCard">
      <div className="card-body">
        <div id='numDiv'>
          <div>Electric: 3</div>
          <div>Smart: 3</div>
          <div>Classic: 3</div>
          <div id="description">Bikes Available</div>
        </div>
        <div>
          <AiOutlineInfoCircle size={40} color='#B4B4BB'/>
        </div>
      </div>
    </div>
  );
};

export default BikesAvailable;
