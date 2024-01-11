"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
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
        <div className={styles.oauthWrapper}>
          <div>
            <h2 className={styles.loginTitle}>Sign In With</h2>
            <div className={styles.buttonWrapper}>
              <button
                className={`${styles.socialButton} ${styles.google}`}
                onClick={() => signIn("google")}
              >
                <Image src="/google.svg" alt="" width={24} height={24} priority={true} />
                <span>Google</span>
              </button>
              <button
                className={`${styles.socialButton} ${styles.github}`}
                onClick={() => signIn("github")}
              >
                <Image src="/github-white.png" alt="" width={24} height={24} priority={true} />
                <span>Github</span>
              </button>
            </div>
            <div className={styles.credentialsWrapper}>
              <span className={styles.credentialsLabel}>Username</span>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className={styles.credentialsInput}
                  placeholder="Currently credentials is not working"
                />
                <span className={styles.inputFocus}></span>
              </div>
              <span className={styles.credentialsLabel}>Password</span>
              <div className={styles.inputWrapper}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={styles.credentialsInput}
                  placeholder="Currently credentials is not working"
                />
                <span className={styles.inputFocus}></span>
              </div>
              <div className={styles.containerSignInButton}>
                <button className={styles.signInButton}>Sign In</button>
              </div>
              <div className={styles.signUpWrapper}>
                <span className={styles.signUpLabel}>Not a member?&#9;</span>
                <Link href={"#"} className={`${styles.signUpLabel} ${styles.bb1}`}>
                  Sign up now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
