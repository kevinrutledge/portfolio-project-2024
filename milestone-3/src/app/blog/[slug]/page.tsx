type Props = {
  params: {
    slug: string;
  };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch {
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
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
    </main>
  );
}
