import { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import service from "../../assets/service.json";
import getLineTag from "../../plugins/getLineTag";
import getSortTag from "../../plugins/getSortTag";
import MainService from "../../service/API/Main.service";
import Header from "../../components/Header/Header";
import styles from "./Vacancies.module.scss";
import VacanciesPrice from "../../components/VacanciesPrice/VacanciesPrice";

const VacanciesPage = () => {
  useEffect(() => {
    const getVacancies = async () => {
      const { data } = await MainService.getAllTop("total");
      if (data) {
        const sortTag = await getSortTag(data, service["language"]);
        const { data: dataList } = await MainService.getInfoVacancies(
          getLineTag(sortTag)
        );
        if (dataList) {
          for (var i = 0; i < sortTag.length; i++) {
            sortTag[i].value = dataList[sortTag[i].tag].length;
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
      }
    };
    getVacancies();
    const chart = am4core.create("chartdiv", am4charts.XYChart);
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tag";
    categoryAxis.title.text = "Языки программирования";
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Вакансии";
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "tag";
    series.sequencedInterpolation = true;
    series.columns.template.tooltipText = "ЯП: {categoryX}\nВакансий: {valueY}";
  });
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Количество вакансий</h1>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        <h1>Средняя зарплата</h1>
        <VacanciesPrice />
      </div>
    </>
  );
};

export default VacanciesPage;
