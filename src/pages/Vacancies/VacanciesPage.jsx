import Header from "../../components/Header/Header";
import styles from "./Vacancies.module.scss";

import VacanciesChart from "../../components/Charts/VacanciesChart";
import SalaryChart from "../../components/Charts/SalaryChart";

const VacanciesPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Количество вакансий</h1>
        <VacanciesChart />
        <h1>Средняя зарплата</h1>
        <SalaryChart />
      </div>
    </>
  );
};

export default VacanciesPage;
