import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ProgressChart({ data = [] }) {
  return (
    <div className="card" style={{height:250}}>
      <h3>Weekly Progress</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="calories" stroke="#2ecc71" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
