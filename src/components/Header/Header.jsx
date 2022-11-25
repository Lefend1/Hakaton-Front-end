import logo from "../../assets/img/logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.header__logo}>
          <img src={logo} alt={logo} />
        </div>
        <ul>
          <li>языки</li>
          <li>профессии</li>
          <li>новости</li>
          <li>помощь</li>
          <li>о нас</li>
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
