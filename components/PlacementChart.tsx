"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { year: "2019-20", placement: 62 },
  { year: "2020-21", placement: 68 },
  { year: "2021-22", placement: 76 },
  { year: "2022-23", placement: 84 },
  { year: "2023-24", placement: 91 },
  { year: "2024-25", placement: 96 },
];

export default function PlacementChart() {
 return (
  <div className="w-full bg-white p-8   lg:p-8">
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase  text-primary">
        Placement Trend
      </p>
    </div>

    <div className="h-[240px] w-full ">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="placement" x1="0" y1="0" x2="0" y2="1">
  <stop
    offset="0%"
    stopColor="hsl(var(--p))"
    stopOpacity={0.35}
  />
  <stop
    offset="100%"
    stopColor="hsl(var(--p))"
    stopOpacity={0}
  />
</linearGradient>
          </defs>

          <CartesianGrid
  vertical={false}
  strokeDasharray="4 4"
  stroke="hsl(var(--p) / 0.15)"
/>

          <XAxis
  dataKey="year"
  tick={{ fill: "hsl(var(--p))", fontSize: 13 }}
  tickLine={false}
  axisLine={false}
/>

<YAxis
  
  tickLine={false}
  axisLine={false}
  tick={({ x, y, payload, index }) => {
    if (index === 0) return null;

    return (
      <text
        x={x}
        y={y}
        dy={4}
        textAnchor="end"
        fill="#6b7280"
        fontSize={13}
      >
        {payload.value}
      </text>
    );
  }}
/>

          <Tooltip
  contentStyle={{
    borderRadius: "16px",
    border: "1px solid hsl(var(--p) / 0.15)",
    boxShadow: "0 10px 30px rgba(0,0,0,.08)",
  }}
/>

          <Area
  type="monotone"
  dataKey="placement"
  stroke="hsl(var(--p))"
  strokeWidth={3.5}
  fill="url(#placement)"
/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);
}