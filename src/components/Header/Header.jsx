import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

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
            <NavLink to="/map/framework/total">фреймворки</NavLink>
          </li>
          <li>
            <NavLink to="/vacancies">вакансии</NavLink>
          </li>
          <li>
            <NavLink to="/news/javascript">Новости</NavLink>
          </li>
          {/* <li>
            <NavLink to="/123">о нас</NavLink>
          </li> */}
        </ul>
        <div className={styles.burger__menu}>
          <div onClick={() => setOpen(true)}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </div>
          {open && (
            <>
              <ul onClick={() => setOpen(false)}>
                <li>
                  <NavLink to="/map/language/total">языки</NavLink>
                </li>
                <li>
                  <NavLink to="/map/framework/total">фреймворки</NavLink>
                </li>
                <li>
                  <NavLink to="/vacancies">вакансии</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Новости</NavLink>
                </li>
              </ul>
              <button onClick={() => setOpen(false)}>+</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
