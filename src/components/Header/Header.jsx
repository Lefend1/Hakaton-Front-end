import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.header__logo}>
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <ul>
          <li>
            <NavLink to="/map/language/total">языки</NavLink>
          </li>
          <li>
            <NavLink to="/vacancies">вакансии</NavLink>
          </li>
          <li>
            <NavLink to="/123">помощь</NavLink>
          </li>
          <li>
            <NavLink to="/123">о нас</NavLink>
          </li>
          <li>
            <button className={styles.header__btn}>
              <span>Интернет-банк</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
