import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const getData = async (overLooked) => {
  const url = overLooked
    ? process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/posts/mostViewed?r=t"
      : "https://mkole.vercel.app/api/posts/mostViewed?r=t"
    : process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/posts/mostViewed"
    : "https://mkole.vercel.app/api/posts/mostViewed";

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const MenuPosts = async ({ overLooked }) => {
  const { posts } = await getData(overLooked);

  return (
    <div className={styles.items}>
      {posts?.map((post, index) => (
        <Link href={`/posts/${post.slug}`} className={styles.item} key={index}>
          {overLooked && (
            <div className={styles.imageContainer}>
              <Image src={post.img} alt={post.img} fill className={styles.image} sizes="500" />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}> - {post.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
