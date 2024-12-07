import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

interface IParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(req: NextRequest, { params }: IParams) {
  const resolvedParams = await params;
  await connectDB();

  try {
    const project = await Project.findOne({
      slug: resolvedParams.slug,
    }).orFail();
    return NextResponse.json(project);
  } catch {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
}
