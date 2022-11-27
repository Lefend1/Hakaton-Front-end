import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useEffect } from "react";

am4core.useTheme(am4themes_animated);

const HeatMapChart = ({ id, time, height, data }) => {
  useEffect(() => {
    const chart = am4core.create(id, am4charts.TreeMap);
    chart.dataFields.value = time;
    chart.dataFields.color = "color";
    chart.dataFields.name = "tag";
    const template = chart.seriesTemplates.create("0");
    const template_column = template.columns.template;
    const template_bullet = template.bullets.push(new am4charts.LabelBullet());
    template_column.stroke = am4core.color("#fff");
    template_bullet.locationY = 0.5;
    template_bullet.locationX = 0.5;
    template_bullet.label.text = "{name}";
    template_bullet.label.fontSize = "18";
    template_bullet.label.fontWeight = "700";
    template_bullet.label.fill = am4core.color("#fff");
    chart.data = data;
  });
  return <div id={id} style={{ width: "100%", height: height }}></div>;
};

export default HeatMapChart;
