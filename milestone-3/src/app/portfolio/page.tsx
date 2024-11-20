import ProjectCard from '@/components/portfolio/ProjectCard'

const projects = [
  {
    title: "Rey and Finn's Potion Shop",
    description: "A RESTful API backend for a role-playing potion shop simulation built with Python and FastAPI.",
    imageUrl: "/images/potion_exchange.png",
    imageAlt: "Screenshot of Rey and Finn's Potion Shop",
    detailsUrl: "/portfolio/rey-finn-potion-shop",
  },
  {
    title: "Music Festival Application",
    description: "Developed a backend system for managing music festival events and user interactions using Java.",
    imageUrl: "/images/tortuga_app_hand.jpg",
    imageAlt: "Screenshot of Music Festival Application",
    detailsUrl: "/portfolio/music-festival-app",
  },
]

export default function Portfolio() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-utopia text-center mb-8">
        My Portfolio
      </h1>
      
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  )
}