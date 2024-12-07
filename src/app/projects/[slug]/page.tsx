import Link from 'next/link';

type Props = { 
  params: Promise<{ 
    slug: string 
  }> 
}

async function getProject(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Projects/${slug}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }
    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const paragraphs = project.content.split('\n\n');

  return (
    <main className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-utopia text-center mb-4">{project.title}</h1>

      <div className="text-center text-secondary mb-4">
        <time className="font-crimson">
          {new Date(project.date).toLocaleDateString()}
        </time>
      </div>

      <div className="font-crimson text-lg space-y-6">
        {paragraphs.map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 pt-4 border-t border-border">
        <Link
          href="/projects"
          className="text-primary hover:text-secondary font-crimson"
        >
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}