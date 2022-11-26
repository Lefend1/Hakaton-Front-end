import { useEffect } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { NavLink, useParams } from "react-router-dom";

import getPrecent from "../../plugins/getPrecent";
import service from "../../assets/service.json";
import MainService from "../../service/API/Main.service";
import getLineTag from "../../plugins/getLineTag";
import getSortTag from "../../plugins/getSortTag";
import getColorCell from "../../plugins/getColorCell";
import Header from "../../components/Header/Header";
import styles from "./HeatMap.module.scss";

am4core.useTheme(am4themes_animated);

const HeatMapPage = () => {
  const { time, variation } = useParams();

  useEffect(() => {
    const chart = am4core.create("chartdiv", am4charts.TreeMap);
    const getAllData = async () => {
      const { data } = await MainService.getAllTop(time);
      if (data) {
        const sortTag = await getSortTag(data, service[variation]);
        const { data: dataList } = await MainService.getInfoTag(
          getLineTag(sortTag)
        );
        for (var i = 0; i < sortTag.length; i++) {
          const precent = getPrecent(
            dataList[sortTag[i].tag][0],
            dataList[sortTag[i].tag][dataList[sortTag[i].tag].length - 1],
            time
          );
          sortTag[i].tag = `${sortTag[i].tag.toUpperCase()}\n ${
            precent > 0 ? "+" : ""
          }${precent.toFixed(2)}%`;
          sortTag[i].color = getColorCell(precent);
        }
        chart.data = sortTag;
      }
    };
    getAllData();
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
    return () => {};
  });

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <NavLink to={`/map/${variation}/total`}>За все время</NavLink>
            </li>
            <li>
              <NavLink to={`/map/${variation}/week`}>За неделю</NavLink>
            </li>
            <li>
              <NavLink to={`/map/${variation}/today`}>За сегодня</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={`/map/language/${time}`}>Языки</NavLink>
            </li>
            <li>
              <NavLink to={`/map/framework/${time}`}>Фреймворки</NavLink>
            </li>
            <li>
              <NavLink to={`/map/platform/${time}`}>Платформы</NavLink>
            </li>
            <li>
              <NavLink to={`/map/other/${time}`}>Другое</NavLink>
            </li>
          </ul>
        </div>
        <div id="chartdiv" style={{ width: "100%", height: "100vh" }}></div>
      </div>
    </>
  );
};

export default HeatMapPage;
