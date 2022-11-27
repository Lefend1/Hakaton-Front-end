import { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";

import getPrecent from "../../plugins/getPrecent";
import service from "../../assets/service.json";
import MainService from "../../service/API/Main.service";
import getLineTag from "../../plugins/getLineTag";
import getSortTag from "../../plugins/getSortTag";
import getColorCell from "../../plugins/getColorCell";
import Header from "../../components/Header/Header";
import styles from "./HeatMap.module.scss";
import HeatMapChart from "../../components/Charts/HeatMapChart";

const HeatMapPage = () => {
  const { time, variation } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      const { data } = await MainService.getAllTop(time);
      if (data) {
        const result = await getSortTag(data, service[variation]);
        const { data: dataList } = await MainService.getInfoTag(
          getLineTag(result)
        );
        for (var i = 0; i < result.length; i++) {
          const precent = getPrecent(
            dataList[result[i].tag][0],
            dataList[result[i].tag][dataList[result[i].tag].length - 1],
            time
          );
          result[i].tag = `${result[i].tag.toUpperCase()}\n ${
            precent > 0 ? "+" : ""
          }${precent.toFixed(2)}%`;
          result[i].color = getColorCell(precent);
        }
        setData(result);
      }
    };
    getAllData();
  }, [time, variation]);
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
        <HeatMapChart
          id="programminglanguages"
          height="100vh"
          data={data}
          time={time}
        />
      </div>
    </>
  );
};

export default HeatMapPage;
