import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const body = await req.json();
    const { user, comment } = body;

    const blog = await Blog.findOne({ slug }).orFail();

    const newComment = {
      user,
      comment,
      time: new Date(),
    };

    blog.comments.push(newComment);
    await blog.save();

    return NextResponse.json(newComment);
  } catch {
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 400 }
    );
  }
}
