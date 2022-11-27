import bannerImg from "../../assets/img/james-harrison-vpOeXr5wmR4-unsplash 1.png";
import style from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={style.section__banner}>
      <div className={style.container}>
        <div className={style.banner__text}>
          <div className={style.banner__content}>
            <h1>УЗНАВАЙ НОВЫЕ ТРЕНДЫ В IT ВМЕСТЕ С ЦЕНТР-ИНВЕСТ</h1>
            <div className={style.list__text}>
              <ul>
                <li>Самая свежая информация по програмированию</li>
                <li>Удобный подбор специальностей</li>
                <li>Бесплатный сервис доступный каждому</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.banner__img}>
          <img src={bannerImg} alt={bannerImg} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
