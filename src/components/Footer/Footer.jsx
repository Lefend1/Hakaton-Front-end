import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.item}>
          <Link to="/map/language/total">
            <h1>Языки</h1>
            <ul>
              <li>Тепловая карты</li>
            </ul>
          </Link>
        </div>
        <div className={styles.item}>
          <Link to="/vacancies">
            <h1>Вакансии</h1>
            <ul>
              <li>График специализаций</li>
            </ul>
          </Link>
        </div>
        <div className={styles.item}>
          <Link to="/news/javascript">
            <h1>Новости</h1>
            <ul>
              <li>Лента новостей</li>
            </ul>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
