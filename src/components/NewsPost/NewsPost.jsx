import styles from "./NewsPost.module.scss";

const NewsPost = ({ tag, title, text, date, url, background }) => {
  return (
    <div className={styles.container} style={{ background: background }}>
      <div className={styles.header}>
        <div className={styles.tag}>
          <span>{tag}</span>
        </div>
        <h1>{title}</h1>
      </div>
      <div className={styles.body}>{text}</div>
      <div className={styles.footer}>
        <span>{date}</span>
        <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
          <button className={styles.btn}>Перейти к источнику</button>
        </a>
      </div>
    </div>
  );
};

export default NewsPost;
