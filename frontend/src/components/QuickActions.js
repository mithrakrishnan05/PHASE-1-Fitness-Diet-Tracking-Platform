import React from 'react';

export default function QuickActions() {
  return (
    <div className="card">
      <h4>Quick Actions</h4>
      <div style={{display:'flex', gap:8}}>
        <button>Add Meal</button>
        <button>Log Workout</button>
        <button>Set Goal</button>
      </div>
    </div>
  );
}
