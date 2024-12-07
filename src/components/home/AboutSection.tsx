import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row gap-8 items-start">
      <div className="about-image">
        <Image
          src="/images/kevin_rutledge_headshot.jpg"
          alt="Kevin Rutledge's Profile Picture"
          width={300}
          height={300}
          className="rounded-full mt-5"
          priority
        />
      </div>

      <div className="flex-1">
        <p className="font-crimson text-lg mb-5 px-4 text-text">
          {`Hi! My name is Kevin, and I'm a project-oriented computer science
            student at California Polytechnic State University. I'm passionate
            about building innovative software solutions. With a strong foundation
            in Java, C, C++, and Python, I've honed my technical abilities through
            hands-on projects and a commitment to continuous learning. I'm excited
            to collaborate with hard-working teams and apply impactful software
            solutions.`}
        </p>
      </div>
    </section>
  );
}
