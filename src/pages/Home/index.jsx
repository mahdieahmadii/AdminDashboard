import React from "react";
import Features from "../../components/Features";
import "./index.css";
import Chart from "../../components/Chart";
import { xAxisData } from "../../datas";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title={"Month Sale"} data={xAxisData} dataKey={"Sale"} />
    </div>
  );
}
