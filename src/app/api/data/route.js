import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: { user: true },
      orderBy: {
        views: "desc",
      },
    });
    const users = await fetchUsers();
    const comments = await fetchComments();
    const category = await fetchCategory();

    return new NextResponse(
      JSON.stringify({
        postsLength: posts.length,
        usersLength: users.length,
        commentsLength: comments.length,
        categoryLength: category.length,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }));
  }
};

async function fetchUsers() {
  const users = await prisma.user.findMany({});
  return users;
}

async function fetchComments() {
  try {
    const comments = await prisma.comment.findMany({
      include: { user: true },
      orderBy: {
        id: "desc",
      },
    });
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

async function fetchCategory() {
  const categories = await prisma.category.findMany({});
  return categories;
}
