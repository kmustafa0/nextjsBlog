import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000//api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  //console.log(data);
  let date = new Date(data?.post?.createdAt);
  let formatteDate = date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.post?.title}</h1>
          <div className={styles.user}>
            {data?.post?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data?.post?.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                  sizes="500"
                  priority={true}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.post?.user?.name}</span>
              <span className={styles.date}>{formatteDate}</span>
            </div>
          </div>
        </div>
        {data?.post?.img && (
          <div className={styles.imageContainer}>
            <Image src={data?.post?.img} alt="" fill className={styles.image} priority={true} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.post?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
