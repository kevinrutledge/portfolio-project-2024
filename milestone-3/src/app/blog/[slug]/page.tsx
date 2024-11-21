import Comment from '@/components/blog/Comment';
import CommentForm from '@/components/blog/CommentForm';

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
    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`)
    return null;
  }
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return ( 
    <main className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-utopia text-center mb-4">{blog.title}</h1>

      <div className="text-center text-secondary mb-8">
        <time className="font-crimson">{blog.date}</time>
      </div>

      <div className="font-crimson text-lg space-y-4 whitespace-pre-wrap">
        {blog.content}
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
    </main>
  );
}