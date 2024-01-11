import { Irish_Grover } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./categoryList.module.css";

const getData = async () => {
  let res;
  if (process.env.NODE_ENV === "development") {
    res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });
  } else {
    res = await fetch("https://mkole.vercel.app/api/categories", {
      cache: "no-store",
    });
  }

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
                priority={true}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
