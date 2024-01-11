import Link from "next/link";
import styles from "./posts.module.css";

const getData = async () => {
  const url =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/posts/getAllPosts`
      : `https://mkole.vercel.app/api/posts/getAllPosts`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const Posts = async () => {
  const { posts } = await getData();
  return (
    <div className={styles.posts_wrapper}>
      <div className={styles.posts_heading}>
        <h1 className={styles.posts_title}>posts</h1>
        <Link href={"/admin/posts/new"} className={styles.posts_btn_add}>
          add new
        </Link>
      </div>
      <div className={styles.posts_container}>
        {posts.map((post) => (
          <div
            key={post.id}
            className={styles.post_item}
            style={{ backgroundImage: `url(${post.img})` }}
          >
            <div className={styles.post_content}>
              <h2>{post.title.substring(0, 30) + "..."}</h2>
              <p>{post.catSlug}</p>
              <p>{post.user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
