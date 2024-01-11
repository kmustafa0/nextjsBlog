import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL POSTS
export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: { user: true },
      orderBy: {
        views: "desc",
      },
    });

    return new NextResponse(JSON.stringify({ posts }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }));
  }
};
