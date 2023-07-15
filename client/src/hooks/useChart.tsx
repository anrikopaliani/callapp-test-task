import { useEffect } from "react";
import { useStore } from "../store";
import { PreviousReduceValueType } from "./types";
import { PieConfig } from "@ant-design/charts";

const useChart = () => {
  const { fetchUsers, users } = useStore();

  useEffect(() => {
    if (users.length <= 0) {
      fetchUsers();
    }
  }, []);

  const cities = users.map((user) => ({ city: user.address.city }));

  const data = Object.entries(
    cities.reduce((prev: PreviousReduceValueType, { city }) => {
      prev[city] = prev[city] ? prev[city] + 1 : 1;
      return prev;
    }, {})
  ).map(([city, count]) => ({ city, count }));

  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: "count",
    colorField: "city",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return { data, config };
};

export default useChart;
