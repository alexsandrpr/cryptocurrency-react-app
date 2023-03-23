import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

function ChartState(prices) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={prices}>
        <Line
          type="monotone"
          dot={false}
          dataKey="1"
          stroke="#0FAE96"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ChartState;
