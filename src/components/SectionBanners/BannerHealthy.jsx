import bannerImg from "../../assets/img/christin-hume-Hcfwew744z4-unsplash 1.png";
import style from "./Banner.module.scss";

const Banner = () => {
  return (
    <section
      className={style.section__banner}
      style={{ background: "#E4F8E4" }}
    >
      <div className={style.container}>
        <div className={style.banner__text}>
          <div>
            <h1>КОМУ ЭТО МОЖЕТ БЫТЬ ПОЛЕЗНО?</h1>
            <div className={style.list__text}>
              <ul>
                <li>
                  Начинающим специалистам, и студентам не нашедшим свой путь в
                  IT
                </li>
                <li>Профессионалам не следящими за трендами сферы</li>
                <li>Компаниям, которые не разбираются в сфере</li>
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
