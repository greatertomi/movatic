import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import MetricCard from "./MetricCard";
import BikesAvailable from "./BikesAvailable";
import { StatusContext } from "../StatusContext";

const StationDetails = () => {
  const [stationStation, getStationStatus] = useContext(StatusContext);
  const { id } = useParams();
  getStationStatus(id);
  return (
    <div>
      <h2 className="detailHeading">{id}</h2>
      <div className="row px-3">
        <div className="col-md-3">
          <MetricCard
            description="is returning"
            number={stationStation.is_installed}
          />
        </div>
        <div className="col-md-3">
          <MetricCard
            description="is renting"
            number={stationStation.is_renting}
          />
        </div>
        <div className="col-md-3">
          <MetricCard
            description="is installed"
            number={stationStation.is_returning}
          />
        </div>
        <div className="col-md-3">
          <MetricCard
            description="num docks available"
            number={stationStation.num_bikes_available}
          />
        </div>
        <div className="col-md-3">
          <MetricCard
            description="num bikes available"
            number={stationStation.num_docks_available}
          />
        </div>
        <div className="col-md-3">
          <BikesAvailable />
        </div>
      </div>
    </div>
  );
};

export default StationDetails;
