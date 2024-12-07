import Link from "next/link";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";
import type { Project } from "@/database/projectSchema";

async function getProjects() {
  await connectDB();
  try {
    const projects = await ProjectModel.find().sort({ date: -1 }).orFail();
    return projects;
  } catch {
    return null;
  }
}

export default async function ProjectListPage() {
  const projects = await getProjects();

  return (
    <main className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-utopia text-center mb-8">Projects</h1>

      <div className="space-y-8">
        {projects ? (
          projects.map((project: Project) => (
            <article
              key={project.slug}
              className="border-b border-border pb-8 last:border-b-0"
            >
              <h2 className="text-2xl font-crimson mb-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-text hover:text-secondary"
                >
                  {project.title}
                </Link>
              </h2>

              <div className="text-secondary mb-4">
                <time className="font-crimson">
                  {new Date(project.date).toLocaleDateString()}
                </time>
              </div>

              <p className="font-crimson text-lg mb-4">{project.description}</p>

              <Link
                href={`/projects/${project.slug}`}
                className="font-crimson font-bold text-primary hover:text-secondary"
              >
                View Details
              </Link>
            </article>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </main>
  );
}
