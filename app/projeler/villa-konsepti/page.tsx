// app/projeler/villa-konsepti/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Ensure you have lucide-react installed

export default function ProjectPage() {
  
  // Placeholder Data - Replace with your actual content
  const project = {
    title: "Villa Konsepti",
    location: "Bodrum, Türkiye",
    year: "2024",
    services: "İç Mimari & 3D Görselleştirme",
    description: `
      Bu proje, Ege'nin dingin doğasıyla modern mimarinin keskin hatlarını birleştiren bir yaşam alanı kurgusudur. 
      Doğal ışığın mekân içerisindeki hareketini merkeze alan tasarımda, ham dokular ve nötr renk paleti kullanılarak 
      zamansız bir atmosfer yaratılmıştır. İç ve dış mekan arasındaki sınırların flulaştığı, kullanıcıya hem mahremiyet 
      hem de doğayla bütünleşme imkanı sunan bir sığınak.
    `,
    // Array of images for the gallery
    galleryImages: [
      "/images/concept-villa-1-1.jpg", // Main hero image
      "/images/concept-villa-1-2.jpg", // Additional views...
      "/images/concept-villa-1-3.jpg",
      "/images/concept-villa-1-4.jpg",
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* 1. Navigation: Back Button */}
        <div className="mb-12">
            <Link 
                href="/projeler" 
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Tüm Projeler
            </Link>
        </div>

        {/* 2. Project Header & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-start">
            
            {/* Title and Description (Left - Spans 2 columns) */}
            <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-6xl font-thin tracking-tight leading-none mb-8">
                    {project.title}
                </h1>
                <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-2xl">
                    {project.description}
                </p>
            </div>

            {/* Project Details Table (Right - Spans 1 column) */}
            <div className="border-t border-gray-200 pt-6 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-12">
                <dl className="space-y-6">
                    <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-400">Lokasyon</dt>
                        <dd className="mt-1 text-lg font-medium">{project.location}</dd>
                    </div>
                    <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-400">Yıl</dt>
                        <dd className="mt-1 text-lg font-medium">{project.year}</dd>
                    </div>
                    <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-400">Hizmetler</dt>
                        <dd className="mt-1 text-lg font-medium">{project.services}</dd>
                    </div>
                </dl>
            </div>
        </div>

        {/* 3. Image Gallery */}
        <section className="space-y-8">
            {project.galleryImages.map((src, index) => (
                <div 
                    key={index} 
                    className="relative w-full overflow-hidden bg-gray-100"
                >
                    {/* Logic for image sizing:
                       - First image is huge (Hero)
                       - Others are standard grid
                    */}
                    <div className={`relative w-full ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3] md:aspect-[16/10]'}`}>
                        <Image
                            src={src}
                            alt={`${project.title} - Görsel ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority={index === 0} // Load first image immediately
                        />
                    </div>
                </div>
            ))}
        </section>

        {/* 4. Footer Navigation (Optional: Next Project) */}
        <div className="mt-32 border-t border-gray-100 pt-12 flex justify-between items-center">
            <span className="text-gray-400 text-sm">SIESTA.ia Project Archive</span>
            <Link 
                href="/iletisim" 
                className="text-lg font-medium hover:underline decoration-1 underline-offset-4"
            >
                Birlikte Çalışalım &rarr;
            </Link>
        </div>

      </main>
    </div>
  );
}