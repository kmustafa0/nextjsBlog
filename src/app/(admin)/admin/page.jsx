import Link from "next/link";
import styles from "./adminPage.module.css";

const getData = async () => {
  const url =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/data`
      : `https://mkole.vercel.app/api/data`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const AdminPage = async () => {
  const { postsLength, usersLength, commentsLength, categoryLength } = await getData();
  return (
    <div>
      <h1 className="header">Admin Page</h1>
      <div className={styles.information}>
        <Link href={"/admin/posts"}>
          <div className={styles.card}>
            <p>Posts</p>
            <span>{postsLength}</span>
          </div>
        </Link>
        <Link href={"/admin/users"}>
          <div className={styles.card}>
            <p>Users</p>
            <span>{usersLength}</span>
          </div>
        </Link>
        <Link href={"/admin/comments"}>
          <div className={styles.card}>
            <p>Comments</p>
            <span>{commentsLength}</span>
          </div>
        </Link>
        <Link href={"/admin/category"}>
          <div className={styles.card}>
            <p>Category</p>
            <span>{categoryLength}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
