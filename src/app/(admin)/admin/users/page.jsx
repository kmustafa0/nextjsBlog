import Image from "next/image";
import styles from "./users.module.css";

const UsersPage = async () => {
  const getData = async () => {
    const url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/users"
        : "https://mkole.vercel.app/api/users";

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  };

  const { users } = await getData();
  return (
    <div className={styles.users_wrapper}>
      <div className={styles.users_heading}>
        <h1>users</h1>
      </div>
      <div className={styles.users_container}>
        {users.map((user) => (
          <div key={user.id} className={styles.user_item}>
            <div className={styles.image_wrapper}>
              <Image
                src={user.image}
                className={styles.user_image}
                alt="user image"
                width={80}
                height={80}
                priority={true}
              />
            </div>
            <div className={styles.user_content}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
