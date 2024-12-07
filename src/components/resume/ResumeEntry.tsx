interface ResumeEntryProps {
  title: string;
  organization?: string;
  location?: string;
  date?: string;
  children?: React.ReactNode;
}

export default function ResumeEntry({
  title,
  organization,
  location,
  date,
  children,
}: ResumeEntryProps) {
  return (
    <div className="pl-5">
      <h3 className="font-crimson text-xl font-bold mb-1">
        {title}
        {organization && ` - ${organization}`}
      </h3>

      <div className="font-crimson text-secondary mb-2">
        {location && <span>{location}</span>}
        {location && date && <span> | </span>}
        {date && <span>{date}</span>}
      </div>

      <div className="font-crimson text-lg space-y-2">{children}</div>
    </div>
  );
}
