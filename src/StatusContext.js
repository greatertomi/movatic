import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "./utils/constants";
import PropTypes from "prop-types";

export const StatusContext = createContext();

export const StatusProvider = (props) => {
  const [stationStatus, setStationStatus] = useState({});
  const [allStationsStatus, setAllStationsStatus] = useState([]);

  const getAllStatus = async () => {
    const res = await axios.get(`${BASEURL}/stationsStatus`);
    const { stations } = res.data.data;
    setAllStationsStatus(stations);
  };

  const getStationStatus = (station_id) => {
    const [station] = allStationsStatus.filter(
      (e) => e.station_id === station_id
    );
    setStationStatus(station);
  };

  useEffect(async () => {
    await getAllStatus();
  }, []);

  return (
    <StatusContext.Provider value={[stationStatus, getStationStatus]}>
      {props.children}
    </StatusContext.Provider>
  );
};

StatusProvider.propTypes = {
  children: PropTypes.node,
};
