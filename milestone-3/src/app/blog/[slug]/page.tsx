import { notFound } from "next/navigation";
import Link from "next/link";
import blogs, { Blog, Section } from "@/app/blog/blogData";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;

  const blog: Blog | undefined = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-utopia text-center mb-4">{blog.title}</h1>

      <div className="text-center text-secondary mb-8">
        <time className="font-crimson">{blog.date}</time>
      </div>

      <div className="font-crimson text-lg mb-8">
        <p>{blog.content.intro}</p>
      </div>

      <div className="space-y-8">
        {blog.content.sections.map((section: Section, index: number) => (
          <section key={index} className="blog-section">
            <h2 className="text-2xl font-crimson font-bold mb-4">
              {section.title}
            </h2>
            <div className="font-crimson text-lg space-y-4">
              <p>{section.content}</p>
            </div>
          </section>
        ))}
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
