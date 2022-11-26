import { Link } from "react-router-dom";
import background_1 from "../../assets/img/Group 3.png";
import background_2 from "../../assets/img/Group 4.png";
import background_3 from "../../assets/img/img_map.png";

import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section className={styles.section__services}>
      <h1>ПОЛЕЗНЫЕ СЕРВИСЫ</h1>
      <div className={styles.container__list}>
        <Link to="/map/language/total">
          <img src={background_3} alt={background_3} />
        </Link>
        <Link>
          <img src={background_1} alt={background_1} />
        </Link>
        <Link>
          <img src={background_2} alt={background_2} />
        </Link>
      </div>
    </section>
  );
};

export default Services;
