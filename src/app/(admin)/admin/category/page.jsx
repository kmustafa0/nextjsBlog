import Link from "next/link";
import styles from "./category.module.css";
const getData = async () => {
  const url =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/categories`
      : `https://mkole.vercel.app/api/categories`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed.");
  }
  return res.json();
};
const CategoryPage = async () => {
  const categories = await getData();
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.categoryHeading}>
        <h1 className={styles.categoryTitlte}>category</h1>
        <Link href={"/admin/category/new"} className={styles.categoryBtnAdd}>
          add new
        </Link>
      </div>
      <div className={styles.categoryContainer}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.categoryItem}
            style={{ backgroundImage: `url(${category.img})` }}
          >
            <div className={styles.categoryContent}>
              <h2>{category.title}</h2>
              <p>{category.slug}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
