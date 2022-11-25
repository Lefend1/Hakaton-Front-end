import styles from "./Text.module.scss";

const InfoText = () => {
  return (
    <section className={styles.container}>
      <h1>ЗАЧЕМ МЫ ЭТО ДЕЛАЕМ?</h1>
      <hr />
      <p>
        IT - самая быстроразвивающаяся и перспективная сфера. С нашей помощью вы
        сможете ознакомиться с трендами программирования, самыми популярными
        языками и специальностями, которые сейчас пользуются спросом
      </p>
    </section>
  );
};

export default InfoText;
