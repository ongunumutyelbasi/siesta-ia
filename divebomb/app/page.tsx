// src/app/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SidebarArticleCard, ArticleCard, PodcastPlayer, VideoCard, SectionHeader } from "@/components/Cards";

// Placeholder URLs for guaranteed visibility and correct sizing
const PL = "https://placehold.co/"; 

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  return (
    // 🚩 SET GLOBAL BACKGROUND: Light=White, Dark=Zinc-900
    <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-zinc-900 transition-colors">
      
      <Header />
      
      {/* --- MAIN CONTENT GRID (TWO COLUMNS) --- */}
      {/* 🚩 SET DEFAULT TEXT COLOR FOR MAIN CONTENT: Light=Gray-800, Dark=Gray-200 */}
      <main className="flex-grow container mx-auto px-5 max-w-[1400px] py-8 text-gray-800 dark:text-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* -------------------------------------- */}
            {/* --- LEFT COLUMN / SIDEBAR (col-span-3) --- */}
            {/* -------------------------------------- */}
            <aside className="lg:col-span-3 space-y-10">

                {/* Latest News Sidebar Block (Headings already set to dark:text-white) */}
                <section>
                    <h3 className="text-xl font-display font-extrabold mb-4 dark:text-white">Latest News</h3>
                    <div className="space-y-2">
                        {/* Data from Dive-Bomb.com (Dec 2025) */}
                        <SidebarArticleCard 
                            img={`${PL}80x80?text=F1+CHAMPION`} 
                            title="Norris secures maiden F1 Drivers' title as Verstappen wins Abu Dhabi Grand Prix" 
                            date="Dec 7, 2025" 
                            tag="Formula 1"
                        />
                        <SidebarArticleCard 
                            img={`${PL}80x80?text=F1+QUALY`} 
                            title="Verstappen takes a decisive pole in Abu Dhabi" 
                            date="Dec 6, 2025" 
                            tag="Formula 1"
                        />
                         <SidebarArticleCard 
                            img={`${PL}80x80?text=F1+CRASH`} 
                            title="Russell tops FP3 as Hamilton crashes out" 
                            date="Dec 6, 2025" 
                        />
                        <SidebarArticleCard 
                            img={`${PL}80x80?text=F1+CRASH`} 
                            title="Russell tops FP3 as Hamilton crashes out" 
                            date="Dec 6, 2025" 
                        />
                        <SidebarArticleCard 
                            img={`${PL}80x80?text=F1+CRASH`} 
                            title="Russell tops FP3 as Hamilton crashes out" 
                            date="Dec 6, 2025" 
                        />
                    </div>
                </section>
                
                {/* Formula 1 Sidebar Block */}
                <section>
                    <h3 className="text-xl font-display font-extrabold mb-4 dark:text-white">Formula 1</h3>
                    <div className="space-y-2">
                        {/* Data from Dive-Bomb.com (F1) */}
                        <SidebarArticleCard 
                            img={`${PL}80x80?text=F1+PREVIEW`} 
                            title="A three-way title showdown: What to expect in the Abu Dhabi Grand Prix" 
                            date="Dec 7, 2025" 
                        />
                        <SidebarArticleCard 
                            img={`${PL}80x80?text=F1+DRIVERS`} 
                            title="Hadjar steps up to Red Bull as Lindblad joins Racing Bulls for 2026" 
                            date="Dec 2, 2025" 
                        />
                    </div>
                </section>

                {/* IndyCar Sidebar Block */}
                <section>
                    <h3 className="text-xl font-display font-extrabold mb-4 dark:text-white">IndyCar</h3>
                    <div className="space-y-2">
                        {/* Data from Dive-Bomb.com (IndyCar) */}
                        <SidebarArticleCard 
                            img={`${PL}80x80?text=IC+WEEKLY`} 
                            title="IndyCar Weekly: Productions, practices and Phoenix" 
                            date="Nov 28, 2025" 
                        />
                        <SidebarArticleCard 
                            img={`${PL}80x80?text=IC+NEWS`} 
                            title="Robb to return to Juncos Hollinger for 2026" 
                            date="Dec 2, 2025" 
                        />
                    </div>
                </section>

            </aside>

            {/* -------------------------------------- */}
            {/* --- RIGHT COLUMN / MAIN (col-span-9) --- */}
            {/* -------------------------------------- */}
            <div className="lg:col-span-9 space-y-10">
                
                {/* 1. HERO SECTION (Main Banner Style - already dark) */}
                <section>
                    <div className="relative group overflow-hidden bg-black aspect-[3/1] cursor-pointer">
                        <img 
                            src={`${PL}1200x400?text=NORRIS+CHAMPION+IMAGE`} 
                            alt="Lando Norris F1 Champion" 
                            className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-500"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end w-full bg-gradient-to-t from-black/90 to-transparent">
                            <span className="bg-primary-red text-[#B4EB16] text-xs font-bold px-0 py-1 uppercase mb-3 inline-block">Formula 1</span>
                            <h1 className="font-display text-2xl md:text-3xl font-bold text-white leading-none mb-3">
                                "I managed to show the best of me": Lando Norris as he clinched the the 2025 World Drivers' Championship
                            </h1>
                            <p className="text-gray-300 text-sm font-semibold mb-4">By Kavi Khandelwal • Dec 7, 2025</p>
                        </div>
                    </div>
                </section>


                {/* 2. SECTION 1: F1 Articles */}
                <section>
                    <SectionHeader title="Formula 1" link="#" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Data from Dive-Bomb.com (F1) */}
                        <ArticleCard 
                            img={`${PL}600x337?text=F1+NORRIS+TITLE`}
                            tag="Race Report"
                            title="Norris secures maiden F1 Drivers' title as Verstappen wins Abu Dhabi Grand Prix"
                            date="Dec 7, 2025"
                            readTime="9 min read" 
                        />
                        <ArticleCard 
                            img={`${PL}600x337?text=F1+PREVIEW+ABC`}
                            tag="Analysis"
                            title="A three-way title showdown, team tactics and curveballs"
                            date="Dec 7, 2025"
                            readTime="5 min read" 
                        />
                        <ArticleCard 
                            img={`${PL}600x337?text=F1+PARTNERSHIPS`}
                            tag="Opinion"
                            title="F1 partnerships that will end at the 2025 Abu Dhabi Grand Prix"
                            date="Dec 7, 2025"
                            readTime="4 min read" 
                        />
                    </div>
                </section>

                {/* 3. PODCAST SECTION */}
                <section>
                    <SectionHeader title="The Dive-Bomb Podcast" link="#" /> 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <PodcastPlayer 
                            title="Ep 44: Final Race Review"
                            ep="Dive-Bomb Racing • 45 min"
                            img={`${PL}200x200?text=PODCAST+44`}
                            progress={100}
                        />
                        <PodcastPlayer 
                            title="Ep 42: Season Preview"
                            ep="Dive-Bomb Racing • 60 min"
                            img={`${PL}200x200?text=PODCAST+42`}
                            progress={0}
                        />
                        <PodcastPlayer 
                            title="Ep 41: Tech Talk"
                            ep="Dive-Bomb Racing • 38 min"
                            img={`${PL}200x200?text=PODCAST+41`}
                            progress={0}
                        />
                    </div>
                </section>

                {/* 4. VIDEO SECTION */}
                <section>
                    <SectionHeader title="Latest Videos" link="#" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <VideoCard title="Top 10 F1 Moments of 2025" img={`${PL}600x337?text=VIDEO+1`} />
                        <VideoCard title="IndyCar Season Review" img={`${PL}600x337?text=VIDEO+2`} />
                        <VideoCard title="How Aero Works in 2026" img={`${PL}600x337?text=VIDEO+3`} />
                        <VideoCard title="Driver Interview: Lando Norris" img={`${PL}600x337?text=VIDEO+4`} />
                    </div>
                </section>
            </div>
            
        </div>
      </main>

      <Footer />
    </div>
  );
}