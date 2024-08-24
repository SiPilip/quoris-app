'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 0.6, pv: 1.0 },
  { name: 'Feb', uv: 0.55, pv: 1.0 },
  { name: 'Mar', uv: 0.5, pv: 1.0 },
  { name: 'Apr', uv: 0.45, pv: 0.95 },
  { name: 'May', uv: 0.45, pv: 0.95 },
  { name: 'Jun', uv: 0.5, pv: 0.95 },
  { name: 'Jul', uv: 0.55, pv: 0.95 },
  { name: 'Aug', uv: 0.55, pv: 0.95 },
  { name: 'Sep', uv: 0.5, pv: 0.9 },
  { name: 'Oct', uv: 0.5, pv: 0.9 },
  { name: 'Nov', uv: 0.5, pv: 0.9 },
  { name: 'Dec', uv: 0.45, pv: 0.9 },
];

export default function MessageTrendChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} className="mt-5">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
