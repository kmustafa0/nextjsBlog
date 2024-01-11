import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL POSTS
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const reverse = searchParams.get("r") === "t";

  try {
    const posts = await prisma.post.findMany({
      take: 5,
      include: { user: true },
      orderBy: {
        views: reverse ? "asc" : "desc",
      },
    });

    return new NextResponse(JSON.stringify({ posts }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }));
  }
};
