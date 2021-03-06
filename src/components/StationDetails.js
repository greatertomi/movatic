import React from 'react';
import MetricCard from './MetricCard';
import BikesAvailable from './BikesAvailable';

const StationDetails = () => {
  return (
    <div>
      <h2 className="detailHeading">Bicycle Madision 500</h2>
      <div className="row px-3">
        <div className="col-md-3">
          <MetricCard description="is returning" number={1}/>
        </div>
        <div className="col-md-3">
          <MetricCard description="is renting" number={1}/>
        </div>
        <div className="col-md-3">
          <MetricCard description="is installed" number={1}/>
        </div>
        <div className="col-md-3">
          <MetricCard description="num docks available" number={1}/>
        </div>
        <div className="col-md-3">
          <MetricCard description="num bikes available" number={1}/>
        </div>
        <div className="col-md-3">
          <BikesAvailable />
        </div>
      </div>
    </div>
  );
};

export default StationDetails;
