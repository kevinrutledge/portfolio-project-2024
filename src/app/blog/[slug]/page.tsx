import { Metadata } from "next";
import Comment from "@/components/blog/Comment";
import CommentForm from "@/components/blog/CommentForm";
import Link from "next/link";
import connectDB from "@/database/db";
import BlogModel, { MongoBlog, Blog } from "@/database/blogSchema";
import { transformBlog } from "@/lib/transforms";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

function formatBlogContent(content: string) {
  const paragraphs = content.split("\n\n");
  return paragraphs.map((paragraph) => {
    const lines = paragraph.split("\n");
    if (lines.length > 1 && !lines[0].endsWith(".")) {
      return {
        title: lines[0],
        content: lines.slice(1).join("\n").trim(),
      };
    }
    return {
      title: null,
      content: paragraph.trim(),
    };
  });
}

async function getBlog(slug: string): Promise<Blog | null> {
  await connectDB();
  try {
    const doc = await BlogModel.findOne({ slug }).lean();
    if (!doc) return null;
    return transformBlog(doc as MongoBlog);
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);
  return {
    title: blog?.title ?? "Blog Not Found",
    description: blog?.description ?? "",
  };
}

export default async function BlogPage({ params }: Props) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (!blog) {
    return (
      <main className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-utopia text-center mb-8">
          Blog Not Found
        </h1>
        <p className="text-center">
          The requested blog post could not be found.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-utopia text-center mb-4">{blog.title}</h1>

      <div className="text-center text-secondary mb-8">
        <time dateTime={blog.date} className="font-crimson">
          {new Date(blog.date).toLocaleDateString()}
        </time>
      </div>

      <div className="font-crimson text-lg space-y-6">
        {formatBlogContent(blog.content).map((paragraph, index) => (
          <div key={index} className="leading-relaxed">
            {paragraph.title && (
              <h3 className="font-bold text-xl mb-2">{paragraph.title}</h3>
            )}
            <p>{paragraph.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-utopia mb-4">Comments</h2>
        {blog.comments?.length > 0 ? (
          blog.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}

        <CommentForm blogSlug={resolvedParams.slug} />
      </div>

      <div className="mt-12 pt-4 border-t border-border">
        <Link
          href="/blog"
          className="text-primary hover:text-secondary font-crimson"
        >
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
