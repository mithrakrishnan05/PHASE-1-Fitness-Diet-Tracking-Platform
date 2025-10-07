import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProgressChart from './ProgressChart';
import QuickActions from './QuickActions';
import SummaryCards from './SummaryCards';

// Provided function component (kept as-is) with demo data wired in
function Dashboard() {
  const [userProgress, setUserProgress] = useState([
    { day: 'Mon', calories: 2200 },
    { day: 'Tue', calories: 2100 },
    { day: 'Wed', calories: 2000 },
    { day: 'Thu', calories: 2300 },
    { day: 'Fri', calories: 1900 },
    { day: 'Sat', calories: 2500 },
    { day: 'Sun', calories: 1800 },
  ]);
  const [dailyStats, setDailyStats] = useState({ calories: 2100, workouts: 1, hydration: 2.0, steps: 5400 });

  return (
    <div className="dashboard">
      <Header title="My Fitness Overview" />
      <ProgressChart data={userProgress} />
      <QuickActions />
      <SummaryCards stats={dailyStats} />
    </div>
  );
}

export default Dashboard;
