import AboutSection from "@/components/home/AboutSection";
import ContactInfo from "@/components/home/ContactInfo";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-3xl font-utopia text-center mb-8">
        Welcome to My Personal Website
      </h1>
      <div className="max-w-4xl mx-auto">
        <AboutSection />
        <ContactInfo />
      </div>
    </main>
  );
}
