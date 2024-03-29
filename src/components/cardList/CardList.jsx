import React from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

const getData = async (page, cat) => {
  let res;
  if (process.env.NODE_ENV === "development") {
    res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
      cache: "no-store",
    });
  } else {
    res = await fetch(`https://mkole.vercel.app/api/posts?page=${page}&cat=${cat || ""}`, {
      cache: "no-store",
    });
  }

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 4;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
