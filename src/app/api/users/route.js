import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        role: "asc",
      },
    });
    return new NextResponse(JSON.stringify({ users }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }));
  }
};
