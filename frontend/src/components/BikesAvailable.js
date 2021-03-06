import React, { useContext } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { StatusContext } from "../StatusContext";

const BikesAvailable = () => {
  const [stationStatus] = useContext(StatusContext);
  const { num_bikes_available_types: bikes } = stationStatus;
  return (
    <div className="card bikesCard">
      <div className="card-body">
        <div id="numDiv">
          <div>Electric: {bikes.classic}</div>
          <div>Smart: {bikes.electric}</div>
          <div>Classic: {bikes.smart}</div>
          <div id="description">Bikes Available</div>
        </div>
        <div>
          <AiOutlineInfoCircle size={40} color="#B4B4BB" />
        </div>
      </div>
    </div>
  );
};

export default BikesAvailable;
