import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./featured.module.css";

/* const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}; */

const Featured = async () => {
  /* const data = await getData("the-pervasive-role-of-ai-in-contemporary-applications"); slug of the post you want to show as a big post */
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, mkole here!</b> Discover my stories and creative ideas
      </h1>
      {/* <div className={styles.post}>
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
            dangerouslySetInnerHTML={{
              __html: data?.post?.desc.substring(0, 100) + "...",
            }}
          />
          <Link href={`/posts/${data?.post?.slug}`} className={styles.button}>
            Read More
          </Link>
        </div>
      </div> */}
      {/* If you have prepared the database, you can delete the codes below and use the code above instead. */}
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/mountain.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea
            laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo,
            accusantium quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
