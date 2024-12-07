import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  detailsUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col md:flex-row gap-5 mb-8 pb-8 border-b border-border last:border-b-0">
      <div className="image-cropper w-full md:w-[300px] h-[150px] relative overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          className="object-cover object-left"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div className="flex-1">
        <h2 className="mb-3">
          <Link
            href={project.detailsUrl}
            className="font-crimson text-2xl text-text hover:text-secondary no-underline"
          >
            {project.title}
          </Link>
        </h2>

        <p className="font-crimson text-lg mb-4">{project.description}</p>

        <Link
          href={project.detailsUrl}
          className="font-crimson font-bold text-primary hover:text-secondary transition-colors"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}
