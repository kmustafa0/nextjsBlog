"use client";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <span>
        All of the articles are experimental. I continue to improve the site, please{" "}
        <Link
          style={{ textDecoration: "underline", color: "inherit" }}
          onMouseOver={(e) => (
            (e.currentTarget.style.textDecoration = "none"),
            (e.currentTarget.style.color = "var(--hoverTextColor)")
          )}
          onMouseOut={(e) => (
            (e.currentTarget.style.textDecoration = "underline"),
            (e.currentTarget.style.color = "inherit")
          )}
          href={"https://github.com/kmustafa0"}
        >
          visit my github address
        </Link>{" "}
        to follow along
      </span>
    </div>
  );
};

export default AboutPage;
