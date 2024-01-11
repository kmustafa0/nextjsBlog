import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./featured.module.css";

const getData = async (slug) => {
  let res;
  if (process.env.NODE_ENV === "development") {
    res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache: "no-store",
    });
  } else {
    res = await fetch(`https://mkole.vercel.app/api/posts/${slug}`, {
      cache: "no-store",
    });
  }

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const Featured = async () => {
  const data = await getData("cultural-kaleidoscope-exploring-the-rich-tapestry-of-humanity");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Dancing with Code: A <b>Developer's Blog</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src={data?.post?.img}
            alt=""
            fill
            className={styles.image}
            sizes="500"
            priority={true}
          />
        </div>
        <div className={styles.textContainer}>
          <Link href={`/posts/${data?.post?.slug}`}>
            <h1 className={styles.postTitle}>{data?.post?.title}</h1>
          </Link>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.post?.desc.substring(0, 100) + "..." }}
          />
          <Link href={`/posts/${data?.post?.slug}`} className={styles.button}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
