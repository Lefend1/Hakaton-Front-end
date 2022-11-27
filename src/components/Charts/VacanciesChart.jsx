import { useEffect, useState } from "react";

import ChartsXy from "./ChartsXy";
import MainService from "../../service/API/Main.service";
import getLineTag from "../../plugins/getLineTag";
import getSortTag from "../../plugins/getSortTag";
import service from "../../assets/service.json";
import getSortArray from "../../plugins/getSortArray";

const VacanciesChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCountVacancies = async () => {
      const { data } = await MainService.getAllTop("total");
      if (data) {
        const result = await getSortTag(data, service["language"]);
        const { data: dataList } = await MainService.getInfoVacancies(
          getLineTag(result)
        );
        if (dataList) {
          for (var i = 0; i < result.length; i++) {
            result[i].value = dataList[result[i].tag].length;
          }
          result.sort(getSortArray);
          setData(result);
        }
      }
    };
    getCountVacancies();
  }, []);
  return (
    <ChartsXy
      id="chartvacancies"
      data={data}
      titleX="Языки программирования"
      titleY="Вакансии"
      tooltipText={`ЯП: {categoryX}\nВакансий: {valueY}`}
      height="500px"
    />
  );
};

export default VacanciesChart;
