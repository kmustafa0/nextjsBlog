"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href={"/"} target="_blank">
          <Image
            src={theme === "light" ? "/instagram-black.png" : "/instagram-white.png"}
            alt="instagram"
            width={24}
            height={24}
            priority={true}
          />
        </Link>
        <Link href={"/"} target="_blank">
          <Image
            src={theme === "light" ? "/twitter-black.png" : "/twitter-white.png"}
            alt="twitter"
            width={24}
            height={24}
            priority={true}
          />
        </Link>
        <Link href={"/"} target="_blank">
          <Image
            src={theme === "light" ? "/github.png" : "/github-white.png"}
            alt="github"
            width={24}
            height={24}
            priority={true}
          />
        </Link>
      </div>
      <div className={styles.logo}>
        <Link href={"/"}>mkblog</Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
