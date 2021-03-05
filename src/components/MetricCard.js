import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';

const MetricCard = () => {
  return (
    <div className="card metricCard mt-n1">
      <div className="card-body">
        <div id='numDiv'>
          <h2>4</h2>
          <div className="ml-1">Bikes</div>
        </div>
        <div>
          <AiOutlineInfoCircle size={40} color='#B4B4BB'/>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
