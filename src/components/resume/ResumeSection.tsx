interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="font-utopia text-2xl mb-4 pb-2 border-b-2 border-text font-semibold font-variant-small-caps">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}
