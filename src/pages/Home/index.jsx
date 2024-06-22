import React from "react";
import Features from "../../components/Features";
import "./index.css";
import Chart from "../../components/Chart";
import { xAxisData } from "../../datas";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title={"Month Sale"} data={xAxisData} dataKey={"Sale"} />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
