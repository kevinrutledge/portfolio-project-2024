import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

interface IParams {
  params: {
    slug: string;
  };
}

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const blog = await Blog.findOne({ slug }).select("comments").orFail();
    return NextResponse.json(blog.comments);
  } catch {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const { user, comment } = await req.json();

    const blog = await Blog.findOne({ slug }).orFail();

    const newComment = {
      user,
      comment,
      time: new Date(),
    };

    blog.comments.push(newComment);
    await blog.save();

    return NextResponse.json(newComment);
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 400 }
    );
  }
}
