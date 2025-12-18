// app/hakkimizda/page.tsx (Gap Reduced)

import Image from "next/image";

// Placeholder data for the founder/lead architect
const founder = {
  name: "Haluk Sağlık",
  title: "Kurucu Ortak & Baş Mimar",
  // philosophyQuote: "Mimari, sadece yapı inşa etmek değil, yaşamın kendisini biçimlendirmektir. Her projede dinginlik ve işlevsellik dengesini ararız.",
  image: "/images/haluk-saglik-portrait.jpeg",
};

// Placeholder text for the studio's history and mission
const historyText = [
  "SIESTA.ia, 2024 yılında, doğal ışık ve minimalist tasarım prensiplerini merkeze alarak kuruldu. Amacımız, gürültülü dünyada sığınak görevi görecek, sakin ve işlevsel mekânlar yaratmaktır.",
  "Haluk Sağlık, 28.03.2001 tarihinde İstanbul'da doğmuştur. Kalemi eline aldığı ilk günden itibaren çizime olan yoğun ilgisi, zamanla tasarıma ve bu tasarımları üç boyutlu (3D) hale getirmeye evrilmiştir.",
  "İç mimarlık eğitimi süresince 3D çizim programlarında uzmanlaşmaya ve özellikle fotorealistik render (gerçekçi görüntü oluşturma) konusunda kendini geliştirmeye özen göstermiştir. Bunun yanı sıra, yapı ve malzeme bilgisi alanında da yetkinliğini artırmak ve deneyim kazanmak amacıyla öğrencilik yıllarında stajlarını tamamlamış ve çeşitli firmalarda aktif olarak görev almıştır. Halen aktif olarak Regnum bünyesindeki tasarım ofisinin bir parçası olarak çalışmalarını sürdürmektedir.",
];
const missionText = "Her tasarımı, kullanıcıların deneyimlerini zenginleştirecek, zamansız ve sürdürülebilir bir sanat eseri olarak görüyoruz. Mekânların ruhu olduğuna inanıyor ve bu ruhu yansıtmayı hedefliyoruz.";


export default function AboutUsPage() {
  return (
    // Root container
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* 🚨 CONSTRAINED CONTENT 🚨 */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-16">
        
        {/* Header Section */}
        <header className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-thin tracking-tight leading-tight mb-4">
            Hakkımızda
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light">
            Siesta Interior Architecture
          </p>
        </header>

        {/* --- Main Content Layout: Text (L) and Portrait (R) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-12 mb-0">
          
          {/* Left Column: Mission and History */}
          <section className="lg:col-span-2 space-y-12">
            
            {/* Mission Statement */}
            <div>
              <h2 className="text-3xl font-medium mb-6 border-l-4 border-gray-200 pl-3">
                Vizyonumuz
              </h2>
              <p className="text-lg font-regular text-gray-700 leading-relaxed mb-4">
                {missionText}
              </p>
            </div>

            {/* History */}
            <div>
              <h2 className="text-3xl font-medium mb-6 border-l-4 border-gray-200 pl-3">
                Kısa Tarihçe
              </h2>
              {historyText.map((paragraph, index) => (
                <p key={index} className="text-lg font-light text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
          </section>

          {/* Right Column: Founder's Portrait and Quote */}
          <aside className="lg:pl-8">
            
            {/* Placeholder Portrait Image */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 mb-8 shadow-xl">
              <Image
                src={founder.image}
                alt={`${founder.name} Portresi`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
            
            {/* Founder Details */}
            <h3 className="text-xl font-medium text-gray-900 mb-1">
              {founder.name}
            </h3>
            <p className="text-sm font-light text-gray-500 mb-6">
              {founder.title}
            </p>
            
            {/* Philosophy Quote */}
            {/* <blockquote className="border-l-4 border-gray-900 pl-4 py-2">
              <p className="italic text-gray-700 font-light text-lg">
                "{founder.philosophyQuote}"
              </p>
            </blockquote>
                */}

          </aside>
        </div>  
      </main> 

      {/* 🚨 FULL-WIDTH CONTACT SECTION 🚨 */}
      <section className="py-16 bg-gray-50/70 border-t border-b border-gray-100 px-4 sm:px-6 lg:px-8">
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
      
    </div>
  );
}