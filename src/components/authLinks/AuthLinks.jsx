"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  open ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href={"/account"} className={styles.link}>
            {session?.user.name.split(" ")[0]}
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href={"/"} className={styles.responsiveLink}>
                {session?.user.name.split(" ")[0]}
              </Link>
              <span className={styles.responsiveLink} onClick={signOut}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
