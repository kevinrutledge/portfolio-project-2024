import Comment from '@/components/blog/Comment';
import CommentForm from '@/components/blog/CommentForm';
import Link from 'next/link';

type Props = { 
  params: { 
    slug: string 
  } 
}

interface IComment {
  user: string;
  comment: string;
  time: Date;
}

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    const data = await res.json();
    return data;
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Split content into paragraphs based on double newlines
  const paragraphs = blog?.content?.split('\n\n') || [blog.description];

  return ( 
    <main className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-utopia text-center mb-4">{blog.title}</h1>

      <div className="text-center text-secondary mb-8">
        <time className="font-crimson">
          {new Date(blog.date).toLocaleDateString()}
        </time>
      </div>

      <div className="font-crimson text-lg space-y-6">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph: string, index: number) => (
            <p key={index} className="leading-relaxed">
              {paragraph.trim()}
            </p>
          ))
        ) : (
          <p>{blog.description}</p>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-utopia mb-4">Comments</h2>
        {blog.comments?.length > 0 ? (
          blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
        
        <CommentForm blogSlug={slug} />
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