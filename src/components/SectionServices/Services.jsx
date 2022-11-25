import background_1 from "../../assets/img/Group 3.png";
import background_2 from "../../assets/img/Group 4.png";
import background_3 from "../../assets/img/Group 5.png";

import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section className={styles.section__services}>
      <h1>ПОЛЕЗНЫЕ СЕРВИСЫ</h1>
      <div className={styles.container__list}>
        <div>
          <img src={background_3} alt={background_3} />
        </div>
        <div>
          <img src={background_1} alt={background_1} />
        </div>
        <div>
          <img src={background_2} alt={background_2} />
        </div>
      </div>
    </section>
  );
};

export default Services;
