import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="mt-6 font-crimson px-4">
      <h2 className="font-bold text-xl mb-4">Contact Info:</h2>
      <div className="space-y-2">
        <div>
          <strong>LinkedIn:</strong>{" "}
          <Link
            href="https://linkedin.com/in/kevinrutledge89"
            target="_blank"
            className="text-primary hover:text-secondary transition-colors"
          >
            linkedin.com/in/kevinrutledge89
          </Link>
        </div>
        <div>
          <strong>GitHub:</strong>{" "}
          <Link
            href="https://github.com/kevinrutledge"
            target="_blank"
            className="text-primary hover:text-secondary transition-colors"
          >
            github.com/kevinrutledge
          </Link>
        </div>
        <div>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:kevin.rutledge.89@gmail.com"
            className="text-primary hover:text-secondary transition-colors"
          >
            kevin.rutledge.89@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
