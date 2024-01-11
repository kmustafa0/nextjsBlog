"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <p id="nav-title">MustafaK</p>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger" />
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <Link href={"/admin"} className={`nav-button ${pathname === "/admin" ? "active" : ""}`}>
          <i class="fas fa-home"></i>
          <span>Dashboard</span>
        </Link>
        <Link
          href={"/admin/posts"}
          className={`nav-button ${
            pathname === "/admin/posts" || pathname === "/admin/posts/new" ? "active" : ""
          }`}
        >
          <i className="fas fa-book" />
          <span>Posts</span>
        </Link>

        <Link
          href={"/admin/users"}
          className={`nav-button ${pathname === "/admin/users" ? "active" : ""}`}
        >
          <i className="fas fa-users" />
          <span>Users</span>
        </Link>
        <Link
          href={"/admin/comments"}
          className={`nav-button ${pathname === "/admin/comments" ? "active" : ""}`}
        >
          <i class="fas fa-comment-alt"></i>
          <span>Comments</span>
        </Link>
        <Link
          href={"/admin/category"}
          className={`nav-button ${pathname === "/admin/category" ? "active" : ""}`}
        >
          <i class="fas fa-hashtag"></i>
          <span>Category</span>
        </Link>
        <hr />
        <Link href={"/"} className="nav-button">
          <i class="fas fa-step-backward"></i>
          <span>Back to site</span>
        </Link>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
          </div>
          <div id="nav-footer-titlebox">
            <span id="nav-footer-title">mustafakole</span>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up" />
          </label>
        </div>
        <div id="nav-footer-content">
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
