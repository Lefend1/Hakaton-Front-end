import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { useEffect } from "react";

import getLineTag from "../../plugins/getLineTag";
import getSortTag from "../../plugins/getSortTag";
import MainService from "../../service/API/Main.service";
import service from "../../assets/service.json";

const VacanciesPrice = () => {
  useEffect(() => {
    const chart = am4core.create("chartprice", am4charts.XYChart);
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tag";
    categoryAxis.title.text = "Языки программирования";
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Сред. зарплата:";
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "tag";
    series.sequencedInterpolation = true;
    series.columns.template.tooltipText = "ЯП: {categoryX}\nВакансий: {valueY}";
    const getVacancies = async () => {
      const { data } = await MainService.getAllTop("total");
      if (data) {
        const sortTag = await getSortTag(data, service["language"]);
        for (var i = 0; i < sortTag.length; i++) {
          const { data: dataPrice } = await MainService.getAverageVacancy(
            sortTag[i].tag
          );
          sortTag[i].value = dataPrice;
        }
        sortTag.sort(function (a, b) {
          if (a.value > b.value) {
            return -1;
          }
          if (a.value < b.value) {
            return 1;
          }
          return 0;
        });
        chart.data = sortTag;
      }
    };
    getVacancies();
  });
  return <div id="chartprice" style={{ width: "100%", height: "500px" }}></div>;
};

export default VacanciesPrice;
