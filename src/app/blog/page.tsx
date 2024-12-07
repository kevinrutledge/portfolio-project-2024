import Link from "next/link";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch {
    return null;
  }
}

export default async function BlogListPage() {
  const blogs = await getBlogs();

  return (
    <main className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-utopia text-center mb-8">Blog</h1>

      <div className="space-y-8">
        {blogs ? (
          blogs.map((blog) => (
            <article
              key={blog.slug}
              className="border-b border-border pb-8 last:border-b-0"
            >
              <h2 className="text-2xl font-crimson mb-2">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-text hover:text-secondary"
                >
                  {blog.title}
                </Link>
              </h2>

              <div className="text-secondary mb-4">
                <time className="font-crimson">
                  {new Date(blog.date).toLocaleDateString()}
                </time>
              </div>

              <p className="font-crimson text-lg mb-4">{blog.description}</p>

              <Link
                href={`/blog/${blog.slug}`}
                className="font-crimson font-bold text-primary hover:text-secondary"
              >
                Read More
              </Link>
            </article>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </main>
  );
}
