import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../context/DarkModeContext";
import { styled } from "styled-components";
import Heading from "./Heading";

const ApplicationChart = ({ data }) => {
  const { isDarkMode } = useDarkMode();

  let dates = [];

  for (let i = 0; i < data.length; i++) {
    let targetDate = new Date();
    let currentDate = new Date(data[i].created_at);

    let timeDif = targetDate.getTime() - currentDate.getTime();

    let daysDiff = Math.floor(timeDif / (1000 * 3600 * 24));

    if (daysDiff <= 7) {
      let currentMonth = currentDate.getMonth() + 1;
      let currentDay = currentDate.getDate();
      let currentYear = currentDate.getFullYear();

      let label = `${currentMonth}/${currentDay}/${currentYear}`;

      dates.push(label);
    }
  }

  const chartData = dates.reduce((acc, date) => {
    if (acc[date]) {
      acc[date] = acc[date] + 1;
    } else {
      acc[date] = 1;
    }
    return acc;
  }, {});

  const unorderedData = Object.entries(chartData).map(([label, value]) => ({
    label,
    value,
  }));

  const finalData = unorderedData.sort((a, b) => {
    const dateA = new Date(a.label);
    const dateB = new Date(b.label);
    return dateA - dateB;
  });

  const ChartContainer = styled.div`
    grid-column: 1 / -1;
    margin-top: 2.4rem;
  `;

  const colors = isDarkMode
    ? {
        salary: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        salary: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <ChartContainer>
      <Heading as="h2">
        Applications from {finalData[0].label} to{" "}
        {finalData[finalData.length - 1].label}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={finalData}>
          <XAxis
            dataKey="label"
            stroke={colors.text}
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
            tickCount={finalData.length}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="value"
            type="monotone"
            stroke={colors.salary.stroke}
            fill={colors.salary.fill}
            strokeWidth={2}
            name="Number of Applications"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ApplicationChart;
