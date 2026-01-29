import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function CallTrendsChart() {
  const data = [
    { name: "Mon", uv: 45 },
    { name: "Tue", uv: 60 },
    { name: "Wed", uv: 55 },
    { name: "Thu", uv: 70 },
    { name: "Fri", uv: 85 },
    { name: "Sat", uv: 95 },
    { name: "Sun", uv: 58 },
  ];

  return (
    <div className=" bg-[#0F172B]/50 border border-[#2B7FFF]/20 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold">
            Call Trends - This Week
          </h3>
          <p className="text-sm text-[#90A1B9]">Total: 472 calls</p>
        </div>

        <select className="bg-[#1D293D] border border-[#2B7FFF]/20 text-white text-[16px] px-4 py-2 rounded-lg hover:bg-white/5 transition">
          <option value="default">This Week </option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
        >
          {/* Gradient */}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#020617" stopOpacity={0.95} />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="4 4"
            vertical={false}
          />

          {/* X Axis */}
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={false}
            tick={{ fill: "#94A3B8", fontSize: 12 }}
          />

          {/* Y Axis */}
          <YAxis
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={false}
            tick={{ fill: "#94A3B8", fontSize: 12 }}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#E5E7EB",
            }}
            labelStyle={{ color: "#93C5FD" }}
            cursor={{ stroke: "rgba(59,130,246,0.3)", strokeWidth: 1 }}
          />

          {/* Area */}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#colorUv)"
            dot={false}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
