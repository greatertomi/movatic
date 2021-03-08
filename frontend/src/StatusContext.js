import React, { createContext, useState } from "react";
import axios from "axios";
import { BASEURL } from "./utils/constants";
import PropTypes from "prop-types";

export const StatusContext = createContext();

export const StatusProvider = (props) => {
  const [stationStatus, setStationStatus] = useState({});

  const getStationStatus = async (station_id) => {
    const res = await axios.get(`${BASEURL}/stationsStatus`);
    const { stations } = res.data.data;
    const [station] = stations.filter((e) => e.station_id === station_id);
    setStationStatus(station);
  };

  return (
    <StatusContext.Provider value={[stationStatus, getStationStatus]}>
      {props.children}
    </StatusContext.Provider>
  );
};

StatusProvider.propTypes = {
  children: PropTypes.node,
};
