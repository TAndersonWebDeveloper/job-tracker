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
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

const ChartContainer = styled.div`
  grid-column: 1 / -1;
  margin-top: 8rem;

  & h2 {
    margin-bottom: 2.4rem;
    margin-left: 5rem;
  }
`;

const ApplicationChart = ({ data }) => {
  const { isDarkMode } = useDarkMode();
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("last");

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), filter || 7),
    end: new Date(),
  });

  let dates = allDates.map((date) => {
    return {
      label: format(date, "MM/dd/yyyy"),
      applications: data.filter((job) =>
        isSameDay(date, new Date(job.created_at))
      ).length,
    };
  });

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
        Applications from {format(allDates.at(0), "MMM dd yyyy")} &mdash;
        {format(allDates.at(-1), "MMM dd yyyy")}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={dates}>
          <XAxis
            dataKey="label"
            stroke={colors.text}
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="applications"
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
