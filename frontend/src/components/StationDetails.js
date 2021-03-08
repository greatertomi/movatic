import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import MetricCard from "./MetricCard";
import BikesAvailable from "./BikesAvailable";
import { StatusContext } from "../StatusContext";

const StationDetails = () => {
  const [stationStatus, getStationStatus] = useContext(StatusContext);
  const { id } = useParams();

  useEffect(async () => {
    await getStationStatus(id);
  }, []);

  return (
    <div>
      <h2 className="detailHeading">{id}</h2>
      {stationStatus && (
        <div className="row px-3">
          <div className="col-md-3">
            <MetricCard
              description="is returning"
              number={stationStatus.is_installed}
            />
          </div>
          <div className="col-md-3">
            <MetricCard
              description="is renting"
              number={stationStatus.is_renting}
            />
          </div>
          <div className="col-md-3">
            <MetricCard
              description="is installed"
              number={stationStatus.is_returning}
            />
          </div>
          <div className="col-md-3">
            <MetricCard
              description="num docks available"
              number={stationStatus.num_bikes_available}
            />
          </div>
          <div className="col-md-3">
            <MetricCard
              description="num bikes available"
              number={stationStatus.num_docks_available}
            />
          </div>
          <div className="col-md-3">
            <BikesAvailable />
          </div>
        </div>
      )}
    </div>
  );
};

export default StationDetails;
