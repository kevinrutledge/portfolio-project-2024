export default function Footer() {
  return (
    <footer className="bg-footer text-footer-text text-center py-2 mt-auto">
      <div className="container mx-auto px-4">
        <p className="font-crimson m-0">
          © {new Date().getFullYear()} Kevin Rutledge | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
