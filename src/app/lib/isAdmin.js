"use client";
import { useSession } from "next-auth/react";

export const isAdmin = (adminEmail) => {
  const { data: session } = useSession();

  if (session) {
    return adminEmail === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  }

  return false;
};
