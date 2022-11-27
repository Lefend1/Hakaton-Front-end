import { useEffect, useState } from "react";

import ChartsXy from "./ChartsXy";
import MainService from "../../service/API/Main.service";
import getSortTag from "../../plugins/getSortTag";
import service from "../../assets/service.json";
import getSortArray from "../../plugins/getSortArray";

const VacanciesChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAverageVacancy = async () => {
      const { data } = await MainService.getAllTop("total");
      if (data) {
        const result = await getSortTag(data, service["language"]);
        for (var i = 0; i < result.length; i++) {
          const { data: dataPrice } = await MainService.getAverageVacancy(
            result[i].tag
          );
          result[i].value = dataPrice;
        }
        result.sort(getSortArray);
        setData(result);
      }
    };
    getAverageVacancy();
  }, []);
  return (
    <ChartsXy
      id="chartsalary"
      data={data}
      titleX="Языки программирования"
      titleY="Зарплата"
      tooltipText={`ЯП: {categoryX}\nСред. зп: {valueY} руб.`}
      height="500px"
    />
  );
};

export default VacanciesChart;
