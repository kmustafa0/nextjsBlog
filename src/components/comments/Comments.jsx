"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import styles from "./comments.module.css";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();
  //console.log(data);

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  //console.log(postSlug);

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment"
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : Array.isArray(data) && data.length > 0
          ? data.map((item) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                      sizes="500"
                      priority={true}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))
          : "no comments"}
      </div>
    </div>
  );
};

export default Comments;
