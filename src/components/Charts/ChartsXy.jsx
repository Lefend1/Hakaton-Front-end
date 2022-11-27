import { useEffect } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const ChartsXy = ({ id, titleX, titleY, tooltipText, height, data }) => {
  useEffect(() => {
    const chart = am4core.create(id, am4charts.XYChart);
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    const series = chart.series.push(new am4charts.ColumnSeries());
    categoryAxis.dataFields.category = "tag";
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "tag";
    categoryAxis.title.text = titleX;
    valueAxis.title.text = titleY;
    series.sequencedInterpolation = true;
    series.columns.template.tooltipText = tooltipText;
    chart.data = data;
  });

  return <div id={id} style={{ width: "100%", height: height }}></div>;
};

export default ChartsXy;
