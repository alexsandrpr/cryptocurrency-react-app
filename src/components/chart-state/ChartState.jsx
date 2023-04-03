import React, { useState, useEffect } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const ChartState = ({ cryptoIds }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      const vsCurrency = "usd";
      const days = 20;
      const urls = cryptoIds.map(
        (id) =>
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vsCurrency}&days=${days}`
      );

      try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        const chartData = () =>
          data.map((d, index) => ({
            name: cryptoIds[index],
            data: d.prices.map((p) => ({ x: new Date(p[0]), y: p[1] })),
          }));
        setChartData(chartData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChartData();
  }, [cryptoIds]);

  return (
    <>
      {chartData.map((d) => (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dot={false}
              dataKey="y"
              stroke="#0FAE96"
              strokeWidth={2}
              key={d.name}
              data={d.data}
              name={d.name}
            />
          </LineChart>
        </ResponsiveContainer>
      ))}
    </>
  );
};

export default ChartState;
