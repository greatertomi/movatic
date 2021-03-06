import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineInfoCircle} from 'react-icons/ai';

const MetricCard = ({description, number}) => {
  return (
    <div className="card metricCard">
      <div className="card-body">
        <div id='numDiv'>
          <h2>{number}</h2>
          <div>{description}</div>
        </div>
        <div>
          <AiOutlineInfoCircle size={40} color='#B4B4BB'/>
        </div>
      </div>
    </div>
  );
};

MetricCard.propTypes = {
  description: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

export default MetricCard;
