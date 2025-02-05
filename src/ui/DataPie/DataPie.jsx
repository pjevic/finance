/** @format */

import { PieChart, Tooltip, Pie, Cell, ResponsiveContainer } from "recharts";
import { lightenColor, formatToDollars } from "../../utils/helpers";
import styles from "./DataPie.module.scss";

function DataPie({ budgets }) {
  const pieChartData = budgets.map((budget) => ({
    name: budget.category,
    value: Number(budget.maximum),
    color: budget.theme,
    lightColor: lightenColor(budget.theme),
  }));

  return (
    <div className={styles.pie}>
      <div className={styles.pie__wrapper}>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart width={240} height={240}>
            {/* Outer Ring */}
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={94}
              stroke="none"
              startAngle={450}
              endAngle={90}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            {/* Inner Ring */}
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={94}
              innerRadius={81}
              stroke="none"
              startAngle={450}
              endAngle={90}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.lightColor} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className={styles.circleCenter}>
          <div className={styles.sum}>{formatToDollars(338).slice(0, -3)}</div>
          <div className={styles.text}>
            of {formatToDollars(975).slice(0, -3)} limit
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataPie;
