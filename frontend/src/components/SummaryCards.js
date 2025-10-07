import React from 'react';

export default function SummaryCards({ stats = {} }) {
  return (
    <div className="summary-grid">
      <div className="card">
        <h4>Calories</h4>
        <p>{stats.calories || 0} kcal</p>
      </div>
      <div className="card">
        <h4>Workouts</h4>
        <p>{stats.workouts || 0} sessions</p>
      </div>
      <div className="card">
        <h4>Water</h4>
        <p>{stats.hydration || 0} L</p>
      </div>
      <div className="card">
        <h4>Steps</h4>
        <p>{stats.steps || 0}</p>
      </div>
    </div>
  );
}
