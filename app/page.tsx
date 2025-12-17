// app/page.tsx (Updated with reduced vertical padding on Projeler section)

import Image from "next/image";
import { HeroImageTransition } from "@/components/HeroImageTransition"; 

// Define a simple structure for project data
interface Project {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const featuredProjects: Project[] = [
  {
    title: "Villa Konsepti",
    subtitle: "3ds Max Render",
    image: "/images/concept-villa-1-1.jpg", 
    href: "/projeler/villa-konsepti",
  },
  {
    title: "Mutfak Tasarımı",
    subtitle: "3ds Max Render",
    image: "/images/mutfak-1-1.jpg", 
    href: "/projeler/mutfak-tasarimi",
  },
];

const featuredWorkHeading = "Projeler"; 
const philosophyText = "Titiz işçiliği dingin, minimalist estetikle harmanlayarak insan ihtiyaçlarına yanıt veren mekânlar tasarlıyoruz.";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <main className="w-full">

        {/* 1. HERO SECTION: Image Transition Component */}
        <section className="w-full">
          <HeroImageTransition />
        </section>

        {/* 2. Featured Projects Section (REDUCED VERTICAL PADDING) */}
        <section className="pt-12 pb-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium mb-12 border-l-4 border-gray-200 pl-3">{featuredWorkHeading}</h2>
          
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            {featuredProjects.map((project, index) => (
              <a
                key={index}
                href={project.href}
                className="group block relative"
              >
                {/* Project Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 mb-4 transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.01]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                    priority={index === 0} 
                  />
                </div>

                {/* Project Text */}
                <h3 className="text-2xl font-medium tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-700">
                  {project.title}
                </h3>
                <p className="text-sm font-light text-gray-500 mt-1">
                  {project.subtitle}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* 3. Call to Action/About Snippet */}
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