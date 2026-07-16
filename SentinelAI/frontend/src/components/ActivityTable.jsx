import React from 'react';

function ActivityTable({ activities }) {
  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Activity</th>
          <th>Risk</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => (
          <tr key={index}>
            <td>{activity.user}</td>
            <td>{activity.activity}</td>
            <td>{activity.risk}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ActivityTable;