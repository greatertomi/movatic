import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = () => {
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
        <tr>
          <td>Name 1</td>
          <td>Location 1</td>
          <td>Location 1</td>
          <td>Entries 1</td>
          <td>Risk Profile</td>
          <td>
            <Link className="btn btn-primary btn-sm" to="/status/gb_234">View Detail</Link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
