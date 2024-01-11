import Sidebar from "@/components/sidebar/Sidebar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import styles from "./layout.module.css";

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (session?.user.role !== "admin") {
    return (
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <h1>you are not authorized to view this page</h1>
        <Link href="/" style={{ color: "blue" }}>
          Go back to home page
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.adminWrapper}>
      <Sidebar />
      <section className="main">{children}</section>
    </div>
  );
}
