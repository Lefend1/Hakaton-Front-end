import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

import NewsPost from "../../components/NewsPost/NewsPost";
import Header from "../../components/Header/Header";
import styles from "./News.module.scss";
import MainService from "../../service/API/Main.service";
import getSortTag from "../../plugins/getSortTag";
import service from "../../assets/service.json";

const NewsPage = () => {
  const { tag } = useParams();
  const [post, setPost] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const responseTags = await MainService.getAllTop("total");
      if (responseTags?.data) {
        const resultTags = await getSortTag(
          responseTags.data,
          service["language"]
        );
        setTags(resultTags);
      }
      var responsePosts = await MainService.getPost(tag);
      if (responsePosts?.data) {
        const colors = ["#F5EFB5", "#B5E6F5", "#D4FBD1", "#E4ECF8", "#E4ECF8"];
        for (var i = 0; i < responsePosts?.data[tag].length; i++) {
          responsePosts.data[tag][i].color =
            colors[Math.floor(Math.random() * colors.length)];
        }
        console.log(responsePosts?.data[tag]);
        setPost(responsePosts?.data[tag]);
      }
    };
    getPosts();
  }, [tag]);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Новости</h1>
        <div className={styles.container__navbar}>
          <h1>Языки программирования</h1>
          <div className={styles.navbar__list}>
            <ul>
              {tags.map((x) => (
                <li key={x.tag}>
                  <NavLink to={`/news/${x.tag}`}>{x.tag}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          {post.length > 0 &&
            post.map((x) => (
              <NewsPost
                title={x.title}
                text={x.text}
                tag={x.tag}
                date={x.time}
                url={x.url}
                background={x.color}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default NewsPage;
