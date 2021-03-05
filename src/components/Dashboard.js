import React from 'react';

const Dashboard = () => {
  return (
    <div className="px-3">
      <table className="table">
        <thead>
        <tr className="bg-light">
          <th>NAME</th>
          <th>LOCATION</th>
          <th>STATUS</th>
          <th>ENTRIES</th>
          <th>RISK PROFILE</th>
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
          <td><button className="btn btn-primary btn-sm">View Detail</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
