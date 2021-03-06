import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { BASEURL } from "../utils/constants";

const Dashboard = () => {
  const [stations, setStations] = useState([]);

  const getStations = async () => {
    const res = await axios.get(`${BASEURL}/stations`);
    return res.data.data.stations;
  };

  useEffect(async () => {
    const values = await getStations();
    setStations(values);
  }, []);

  return (
    <div className="px-3">
      <table className="table">
        <thead>
          <tr className="bg-light">
            <th>STATION ID</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>LON</th>
            <th>IAT</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {stations.map((value) => (
            <tr key={value.station_id}>
              <td>{value.station_id}</td>
              <td>{value.name}</td>
              <td>{value.address}</td>
              <td>{value.lon}</td>
              <td>{value.lat}</td>
              <td>
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/status/${value.station_id}`}
                >
                  View Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
