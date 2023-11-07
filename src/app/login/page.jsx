"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./loginPage.module.css";
const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.socialButton} onClick={() => signIn("google")}>
          <Image src="/google.svg" alt="" width={24} height={24} priority={true} />
          <span>Sign in with Google</span>
        </button>
        <button className={styles.socialButton} onClick={() => signIn("github")}>
          <Image src="/github-white.png" alt="" width={24} height={24} priority={true} />
          <span>Sign in with Github</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
