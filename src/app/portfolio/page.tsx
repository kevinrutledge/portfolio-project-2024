import Link from "next/link";
import Image from "next/image";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";
import type { Project } from "@/database/projectSchema";

const imageMap: Record<string, string> = {
  "rey-finn-potion-shop": "potion_exchange.png",
  "music-festival-app": "tortuga_app_hand.jpg",
};

async function getProjects() {
  await connectDB();
  try {
    const projects = await ProjectModel.find().sort({ startDate: -1 }).orFail();
    return projects;
  } catch {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-utopia text-center mb-8">My Portfolio</h1>

      <div className="space-y-8">
        {projects ? (
          projects.map((project: Project) => {
            const imageName = imageMap[project.slug];
            const imageUrl = imageName ? `/images/${imageName}` : "";

            return (
              <article
                key={project.slug}
                className="flex flex-col md:flex-row gap-5 mb-8 pb-8 border-b border-border last:border-b-0"
              >
                {imageName && (
                  <div className="image-cropper w-full md:w-[300px] h-[150px] relative overflow-hidden">
                    <Link href={`/projects/${project.slug}`}>
                      <Image
                        src={imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover object-left"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </Link>
                  </div>
                )}

                <div className="flex-1">
                  <h2 className="mb-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-crimson text-2xl text-text hover:text-secondary no-underline"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="font-crimson text-lg mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 bg-navbar rounded-full font-crimson"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-crimson font-bold text-primary hover:text-secondary transition-colors"
                    >
                      Learn More
                    </Link>
                    {project.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-crimson font-bold text-primary hover:text-secondary transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </main>
  );
}
