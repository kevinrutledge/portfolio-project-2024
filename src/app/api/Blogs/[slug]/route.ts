import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

interface IParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(req: NextRequest, { params }: IParams) {
  const resolvedParams = await params;
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug: resolvedParams.slug }).orFail();
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
  const resolvedParams = await params;
  await connectDB();

  try {
    const body = await req.json();
    const { user, comment } = body;

    const blog = await Blog.findOne({ slug: resolvedParams.slug }).orFail();

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
