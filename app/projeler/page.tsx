// app/projeler/page.tsx

import Image from "next/image";
import Link from "next/link";

// Define your project data here
// You can add more projects to this array as you create them
const allProjects = [
  {
    id: 1,
    title: "Villa Konsepti",
    category: "Bodrum / Konut",
    year: "2024",
    image: "/images/concept-villa-1-1.jpg", 
    href: "/projeler/villa-konsepti",
  },
  {
    id: 2,
    title: "Mutfak Tasarımı",
    category: "İstanbul / İç Mekan",
    year: "2024",
    image: "/images/mutfak-1-1.jpg", 
    href: "/projeler/mutfak-tasarimi",
  },
  // Placeholder for future project
  {
    id: 3,
    title: "Ofis Projesi",
    category: "Ankara / Ticari",
    year: "2023",
    image: "/images/office-nordic.jpg", // Ensure you have this image or change it
    href: "#", // Update when you have a page
  },
  // Placeholder for future project
  {
    id: 4,
    title: "Loft Daire",
    category: "New York / Konut",
    year: "2023",
    image: "/images/loft-project.jpg", // Ensure you have this image or change it
    href: "#", 
  },
];

export default function ProjectsIndexPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Main Content Wrapper */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-16">
        
        {/* 1. Page Header */}
        <header className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl font-thin tracking-tight leading-tight mb-6">
            Tüm Projeler
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-8">
            <p className="text-xl text-gray-500 max-w-2xl font-light">
              Fonksiyon, estetik ve dinginliğin kesiştiği noktada duran işlerimiz.
            </p>
            <span className="hidden md:block text-sm text-gray-400 font-mono mt-4 md:mt-0">
              {allProjects.length} PROJE
            </span>
          </div>
        </header>

        {/* 2. Projects Grid */}
        {/* grid-cols-1 for mobile, grid-cols-2 for desktop to keep images LARGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          
          {allProjects.map((project) => (
            <Link 
              key={project.id} 
              href={project.href}
              className="group block"
            >
              {/* Image Container with Overflow Hidden for Zoom Effect */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={project.id <= 2} // Load top images first
                />
                
                {/* Optional: Overlay that lightens slightly on hover */}
                <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/5 pointer-events-none" />
              </div>

              {/* Text Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 font-light mt-1">
                    {project.category}
                  </p>
                </div>
                
                {/* Year display */}
                <span className="text-sm text-gray-400 font-light pt-2">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
          
        </div>

        <section className="mt-20 py-16 bg-gray-50/70 border-t border-b border-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
              Birlikte Çalışalım!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Yeni bir projeye başlamak için hazır mısınız? Kapsamlı portföyümüzü inceleyebilir veya size özgü vizyonunuzu görüşmek üzere stüdyomuzla irtibata geçebilirsiniz.
            </p>
            <a 
              href="/iletisim"
              className="inline-block px-8 py-3 bg-gray-900 text-white text-sm font-regular tracking-wider rounded-sm hover:bg-gray-700 transition-colors"
            >
              Bize Ulaşın
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}