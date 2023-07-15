import { useChart } from "../../hooks";
import { Pie } from "@ant-design/charts";

const Chart = () => {
  const { config } = useChart();

  return <Pie {...config} />;
};

export default Chart;
