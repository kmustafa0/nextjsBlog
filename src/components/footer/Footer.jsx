"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/mkblogLogo.png"
            alt="logo"
            width={50}
            height={50}
            className={styles.image}
            priority={true}
          />
          <h1 className={styles.logoText}>mkole</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sit consequuntur ab
          commodi? Voluptatum recusandae earum omnis id saepe? Nulla necessitatibus debitis odit
          amet nemo reiciendis nihil velit dolorem quibusdam!
        </p>
        <div className={styles.icons}>
          <Link href={"https://instagram.com/mmustafakole"}>
            <Image
              src={theme === "light" ? "/instagram-black.png" : "/instagram-white.png"}
              alt="instagram"
              width={18}
              height={18}
              priority={true}
            />
          </Link>
          <Link href={"https://twitter.com/mustafakole0"}>
            <Image
              src={theme === "light" ? "/twitter-black.png" : "/twitter-white.png"}
              alt="twitter"
              width={18}
              height={18}
              priority={true}
            />
          </Link>
          <Link href={"https://github.com/kmustafa0"}>
            <Image
              src={theme === "light" ? "/github.png" : "/github-white.png"}
              alt="github"
              width={18}
              height={18}
              priority={true}
            />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=travel">Travel</Link>
          <Link href="/blog?cat=culture">Culture</Link>
          <Link href="/blog?cat=gaming">Gaming</Link>
          <Link href="/blog?cat=food">Food</Link>
          <Link href="/blog?cat=style">Style</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://instagram.com/mmustafakole" target="_blank">
            İnstagram
          </Link>
          <Link href="https://twitter.com/mustafakole0" target="_blank">
            Twitter
          </Link>
          <Link href="https://github.com/kmustafa0" target="_blank">
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
