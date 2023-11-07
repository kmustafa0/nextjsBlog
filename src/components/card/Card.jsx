import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {/* {item.img && (
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            alt=""
            fill
            className={styles.image}
            sizes="300"
            priority={true}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div
          dangerouslySetInnerHTML={{
            __html: item.desc.substring(0, 100) + "...",
          }}
        />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div> */}
      <div className={styles.imageContainer}>
        <Image src={"/food.jpg"} alt="" fill className={styles.image} sizes="300" priority={true} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2023-11-04 - </span>
          <span className={styles.category}>Food</span>
        </div>
        <Link href={"/"}>
          <h1>Homemade Delight: A Delicious Italian Pasta Recipe - Fettuccine Alfredo</h1>
        </Link>
        <div>
          Cooking can be a wonderful way to savor delicious meals, and today I'm here to teach you
          how to make Fettuccine Alfredo, a delightful representation of Italian ...
        </div>
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
