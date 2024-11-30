import { Metadata } from 'next';
import Comment from '@/components/blog/Comment';
import CommentForm from '@/components/blog/CommentForm';
import Link from 'next/link';
import connectDB from '@/database/db';
import BlogModel, { MongoBlog, Blog } from '@/database/blogSchema';
import { transformBlog } from '@/lib/transforms';

interface Props {
  params: {
    slug: string;
  };
}

async function getBlog(slug: string): Promise<Blog | null> {
  await connectDB();
  try {
    const doc = await BlogModel.findOne({ slug }).lean();
    if (!doc) return null;
    return transformBlog(doc as MongoBlog);
  } catch (err) {
    console.error('Error fetching blog:', err);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog(await params.slug);
  return {
    title: blog?.title ?? 'Blog Not Found',
    description: blog?.description ?? ''
  };
}

export default async function BlogPage({ params }: Props) {
  const blog = await getBlog(await params.slug);

  if (!blog) {
    return (
      <main className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-utopia text-center mb-8">Blog Not Found</h1>
        <p className="text-center">The requested blog post could not be found.</p>
      </main>
    );
  }

  const paragraphs = blog.content.split('\n\n') || [blog.description];

  return (
    <main className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-utopia text-center mb-4">{blog.title}</h1>

      <div className="text-center text-secondary mb-8">
        <time dateTime={blog.date} className="font-crimson">
          {new Date(blog.date).toLocaleDateString()}
        </time>
      </div>

      <div className="font-crimson text-lg space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph.trim()}
          </p>
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
        
        <CommentForm blogSlug={await params.slug} />
      </div>

      <div className="mt-12 pt-4 border-t border-border">
        <Link href="/blog" className="text-primary hover:text-secondary font-crimson">
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}