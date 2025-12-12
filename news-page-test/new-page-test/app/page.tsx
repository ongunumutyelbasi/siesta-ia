'use client'; // <-- MANDATORY: This directive marks it as a client component (needed for hooks like useState)

import React, { useState, useEffect } from 'react';
import { Menu, Search, X, ChevronRight, Clock, User, ArrowUpRight, Share2, Bookmark } from 'lucide-react';

/**
 * TYPE DEFINITIONS
 */
interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

interface BrutalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  primary?: boolean;
}

interface SectionHeaderProps {
  title: string;
  onSeeAll: (category: string) => void;
}

interface ArticleViewProps {
  article: Article | undefined;
  onBack: () => void;
}

interface BrutalBadgeProps {
    children: React.ReactNode;
}


/**
 * CONFIGURATION
 * Neo-Brutalist Theme Configuration
 */
const HIGHLIGHT_COLOR = '#0744fd'; 
const OFF_WHITE_HEX = '#FAF8F0'; // Subtle off-white/cream color
const SITE_NAME = "NEXUS"; 

const HOMEPAGE_SECTIONS = ['Technology', 'Design', 'Business', 'Culture'];

/**
 * MOCK DATA
 */
const CATEGORIES = ['Technology', 'Business', 'Design', 'Culture', 'Science', 'Politics'];

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "The Future of Quantum Computing is Silent",
    excerpt: "New breakthroughs in qubit stability suggest the noise problem might be solved sooner than expected.",
    category: "Technology",
    author: "Sarah Jenkins",
    date: "09.24.25",
    readTime: "5 MIN",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Minimalism in the Age of AI Chaos",
    excerpt: "Why designers are stripping back interfaces to combat the overwhelming amount of generated content.",
    category: "Design",
    author: "Marcus Chen",
    date: "09.24.25",
    readTime: "3 MIN",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Global Markets React to Fusion",
    excerpt: "Energy stocks see unprecedented volatility as the first net-positive fusion reactor goes online.",
    category: "Business",
    author: "Elena Rossi",
    date: "09.23.25",
    readTime: "8 MIN",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "The Renaissance of Physical Media",
    excerpt: "Vinyl was just the start. Sales of physical books and CDs are hitting 20-year highs.",
    category: "Culture",
    author: "David Miller",
    date: "09.23.25",
    readTime: "4 MIN",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Architecting for Mars",
    excerpt: "How structural engineers are rethinking concrete for the red planet's unique gravity.",
    category: "Science",
    author: "Dr. Alan Grant",
    date: "09.22.25",
    readTime: "10 MIN",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Remote Work Legislation Shifts",
    excerpt: "New policies in the EU might mandate 'right to disconnect' laws globally.",
    category: "Business",
    author: "Sophie Moore",
    date: "09.21.25",
    readTime: "6 MIN",
    image: "https://images.unsplash.com/photo-1593642632823-8f78536709c7?q=80&w=2070&auto=format&fit=crop"
  },
];

// Brutalist Components
const BrutalBadge: React.FC<BrutalBadgeProps> = ({ children }) => (
  <span 
    className="border border-black px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider text-black"
    style={{ backgroundColor: OFF_WHITE_HEX }}
  >
    {children}
  </span>
);

const BrutalButton: React.FC<BrutalButtonProps> = ({ children, onClick, className = "", primary = false }) => (
  <button 
    onClick={onClick}
    className={`
      px-6 py-3 font-bold uppercase tracking-wider text-sm border-2 border-black transition-all duration-200
      active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
      ${primary 
        ? `text-white hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]` 
        : `text-black hover:bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
      }
      ${className}
    `}
    style={{ 
      borderColor: 'black', 
      ...(primary 
        ? { backgroundColor: HIGHLIGHT_COLOR, color: 'white' } 
        : { backgroundColor: OFF_WHITE_HEX }
      )
    }}
  >
    {children}
  </button>
);

// Updated SectionHeader to be interactive
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, onSeeAll }) => (
  <div className="flex items-end justify-between mb-8 border-b-4 border-black pb-2">
    <h2 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">{title}</h2>
    <button 
      onClick={() => onSeeAll(title)}
      className="hidden md:flex items-center gap-2 font-mono text-xs font-bold uppercase mb-1 hover:text-gray-600 transition-colors"
    >
      See All <ArrowUpRight size={14} />
    </button>
  </div>
);

/**
 * VIEW: Article Reading Page
 */
const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack }) => {
  if (!article) return null;

  return (
    <article className="animate-in slide-in-from-bottom-10 duration-500 pt-24 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
      <button 
        onClick={onBack}
        className="group flex items-center text-sm font-bold uppercase tracking-wider mb-8 border-b-2 border-transparent hover:border-black transition-all w-fit pb-1"
      >
        <ChevronRight className="rotate-180 mr-2" size={20} />
        Back to News
      </button>

      <div 
        className="border-4 border-black p-4 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        style={{ backgroundColor: OFF_WHITE_HEX }}
      >
        <div className="mb-6 flex flex-wrap gap-4 items-center font-mono text-sm border-b-2 border-black pb-6">
          <span className="bg-black text-white px-3 py-1 uppercase">{article.category}</span>
          <span className="flex items-center gap-1"><Clock size={14}/> {article.readTime}</span>
          <span className="flex items-center gap-1 ml-auto font-bold uppercase">{article.date}</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-black uppercase leading-[0.9] mb-8 tracking-tighter">
          {article.title}
        </h1>

        <div className="relative w-full aspect-[21/9] mb-12 border-2 border-black overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-3 border-r-0 lg:border-r-2 border-black pr-6">
             <div className="sticky top-24">
               <p className="font-bold uppercase text-sm text-gray-400 mb-2">Author</p>
               <p className="text-xl font-black mb-6">{article.author}</p>
               
               <p className="font-bold uppercase text-sm text-gray-400 mb-2">Share</p>
               <div className="flex gap-2">
                 <button className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors"><Share2 size={18}/></button>
                 <button className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors"><Bookmark size={18}/></button>
               </div>
             </div>
           </div>

           <div className="lg:col-span-9 prose prose-lg prose-headings:font-black prose-headings:uppercase prose-p:text-gray-800 prose-img:border-2 prose-img:border-black max-w-none">
              <p className="text-xl md:text-2xl font-bold leading-tight mb-8 border-l-4 border-black pl-6 py-2" 
                style={{ borderColor: HIGHLIGHT_COLOR }}>
                {article.excerpt}
              </p>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-6">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <h3>The Brutal Truth</h3>
              <p className="mb-6">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
           </div>
        </div>
      </div>
    </article>
  );
};

/**
 * COMPONENT: Main Application
 */
// Use type void for functions without explicit return
export default function App() {
  const [view, setView] = useState<'home' | 'article'>('home'); 
  const [activeArticleId, setActiveArticleId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Styling helper
  const highlightBg = { backgroundColor: HIGHLIGHT_COLOR };
  const highlightText = { color: HIGHLIGHT_COLOR };
  
  // Explicitly type the result of sort/reverse
  const sortedArticles: Article[] = [...ARTICLES].sort((a, b) => a.id - b.id).reverse(); 
  const featuredArticle: Article | undefined = sortedArticles[0];
  const sideArticles: Article[] = sortedArticles.slice(1, 6);

  const navigateToArticle = (id: number): void => {
    setActiveArticleId(id);
    setView('article');
    window.scrollTo(0, 0);
  };

  const navigateHome = (): void => {
    setView('home');
    setActiveArticleId(null);
    setActiveCategory(null); 
    window.scrollTo(0, 0);
  };
  
  // New function to handle category navigation
  const navigateToCategory = (categoryName: string): void => {
    setActiveCategory(categoryName);
    setView('home'); 
    window.scrollTo(0, 0);
    console.log(`Navigating to category: ${categoryName}`);
  };

  // Filter articles based on activeCategory
  const filteredArticles: Article[] = activeCategory
    ? ARTICLES.filter(a => a.category === activeCategory)
    : sortedArticles;


  return (
    <div 
      className="min-h-screen text-black font-sans selection:bg-black selection:text-white"
      style={{ backgroundColor: OFF_WHITE_HEX }}
    >
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 border-b-4 border-black" style={{ backgroundColor: OFF_WHITE_HEX }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div 
              className="text-3xl font-black tracking-tighter cursor-pointer select-none uppercase italic"
              onClick={navigateHome}
            >
              {SITE_NAME}
            </div>

            {/* Desktop Links - Brutalist Style */}
            <div className="hidden md:flex items-center h-full">
              {CATEGORIES.slice(0, 4).map(cat => (
                <button 
                  key={cat} 
                  onClick={() => navigateToCategory(cat)}
                  className={`h-full px-6 text-sm font-bold uppercase border-l-2 transition-colors border-r-2 border-gray-100 last:border-r-0 
                    ${activeCategory === cat ? 'bg-black text-white' : 'border-transparent hover:bg-gray-100'}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 font-bold uppercase text-xs hover:underline decoration-2 underline-offset-4">
                <Search size={18} /> Search
              </button>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="hidden md:block">
                 <BrutalButton primary>Subscribe</BrutalButton>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute top-[calc(100%+2px)] left-0 w-full border-b-4 border-black p-0 shadow-xl"
            style={{ backgroundColor: OFF_WHITE_HEX }}
          >
             {CATEGORIES.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => navigateToCategory(cat)}
                  className="w-full text-left py-4 px-6 text-xl font-black uppercase border-b border-gray-200 hover:bg-black hover:text-white transition-colors"
                >
                  {cat}
                </button>
              ))}
          </div>
        )}
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="min-h-screen">
        {view === 'article' ? (
          <ArticleView 
            article={ARTICLES.find(a => a.id === activeArticleId)} 
            onBack={navigateHome}
          />
        ) : (
          <div className="pt-32 pb-20">
            
            {/* Displaying Category Filter Status */}
            {activeCategory && (
              <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <div className="flex items-center gap-4 border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: OFF_WHITE_HEX }}>
                  <h3 className="text-xl font-black uppercase">Viewing Category: </h3>
                  <BrutalBadge>{activeCategory}</BrutalBadge>
                  <button 
                    onClick={navigateHome}
                    className="ml-auto text-sm font-mono uppercase text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    Clear Filter <X size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* HERO SECTION: BRUTALIST GRID - Only show if no category filter is active */}
            {!activeCategory && featuredArticle && (
              <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
                
                {/* The Container - Thick Border */}
                <div 
                  className="border-4 border-black grid grid-cols-1 lg:grid-cols-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: OFF_WHITE_HEX }}
                >
                  
                  {/* 1. FEATURED ARTICLE (2/3 width) */}
                  <div 
                    className="lg:col-span-2 border-b-4 lg:border-b-0 lg:border-r-4 border-black relative group cursor-pointer flex flex-col"
                    onClick={() => navigateToArticle(featuredArticle.id)}
                  >
                    {/* Image Container */}
                    <div className="w-full aspect-[16/9] overflow-hidden border-b-4 border-black relative">
                      <img 
                        src={featuredArticle.image} 
                        alt={featuredArticle.title} 
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:filter-none group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-mono font-bold uppercase text-sm">
                        Latest Issue
                      </div>
                    </div>
                    
                    {/* Content Container */}
                    <div 
                      className="p-6 md:p-8 flex-1 hover:bg-gray-50 transition-colors"
                      style={{ backgroundColor: OFF_WHITE_HEX }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <BrutalBadge>{featuredArticle.category}</BrutalBadge>
                        <span className="font-mono text-sm font-bold">{featuredArticle.date}</span>
                      </div>
                      
                      <h1 
                        className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-4 group-hover:text-[var(--highlight)] transition-colors" 
                        style={{'--highlight': HIGHLIGHT_COLOR} as React.CSSProperties}
                      >
                        {featuredArticle.title}
                      </h1>
                      
                      <p className="font-mono text-sm md:text-base text-gray-600 mb-6 max-w-xl">
                        {featuredArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 font-bold uppercase text-sm border-b-2 border-black w-fit pb-1 group-hover:pl-4 transition-all">
                        Read Full Story <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* 2. SIDEBAR LIST (1/3 width) */}
                  <div 
                    className="lg:col-span-1 flex flex-col"
                    style={{ backgroundColor: OFF_WHITE_HEX }}
                  >
                    <div className="p-4 border-b-4 border-black bg-black text-white">
                      <h3 className="font-mono font-bold uppercase tracking-widest text-sm">Trending Now</h3>
                    </div>

                    {sideArticles.map((article, index) => (
                      <div 
                        key={article.id} 
                        className={`
                          flex-1 p-5 border-b-2 border-black last:border-b-0 cursor-pointer group transition-all duration-200
                          hover:bg-[var(--highlight)] hover:text-white
                        `}
                        style={{'--highlight': HIGHLIGHT_COLOR} as React.CSSProperties}
                        onClick={() => navigateToArticle(article.id)}
                      >
                         <div className="flex justify-between items-center mb-2 opacity-60 group-hover:opacity-100 group-hover:text-white">
                           <span className="font-mono text-xs uppercase font-bold">{article.category}</span>
                           <span className="font-mono text-xs">{article.readTime}</span>
                         </div>
                         <h3 className="text-lg font-black uppercase leading-none group-hover:translate-x-1 transition-transform">
                           {article.title}
                         </h3>
                      </div>
                    ))}
                  </div>

                </div>
              </section>
            )}

            {/* CATEGORY GRID: Filters by activeCategory OR shows the full HOMEPAGE_SECTIONS */}
            <section className="max-w-7xl mx-auto px-4 md:px-8">
              
              {/* Conditional Title based on filter status */}
              {activeCategory ? (
                 <div className="mb-12">
                     <h2 className="text-4xl font-black uppercase tracking-tighter text-black leading-none pb-2">
                       All {activeCategory} Articles
                     </h2>
                 </div>
              ) : (
                <h2 className="text-4xl font-black uppercase tracking-tighter text-black leading-none mb-8 border-b-4 border-black pb-2">
                  Featured Sections
                </h2>
              )}


              {activeCategory ? (
                // If a category is active, show ALL articles for that category
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {filteredArticles.map(article => (
                    <div 
                        key={article.id} 
                        className="group cursor-pointer border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
                        style={{ backgroundColor: OFF_WHITE_HEX }}
                        onClick={() => navigateToArticle(article.id)}
                      >
                        <div className="w-full aspect-[4/3] border-b-2 border-black overflow-hidden relative">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:filter-none transition-all duration-500"
                          />
                          <div 
                            className="absolute top-2 right-2 border border-black px-2 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            style={{ backgroundColor: OFF_WHITE_HEX }}
                          >
                            {article.readTime}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 
                            className="text-2xl font-black uppercase leading-none mb-3 group-hover:text-[var(--highlight)] transition-colors" 
                            style={{'--highlight': HIGHLIGHT_COLOR} as React.CSSProperties}
                          >
                            {article.title}
                          </h3>
                          <p className="font-mono text-xs text-gray-500 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <span className="text-sm font-bold uppercase underline decoration-2 underline-offset-2">Read More</span>
                        </div>
                    </div>
                  ))}
                </div>
              ) : (
                // If NO category is active, show the distinct homepage sections
                HOMEPAGE_SECTIONS.map((sectionName) => {
                  // Cast to string since sectionName is always a string from HOMEPAGE_SECTIONS array
                  const sectionArticles: Article[] = sortedArticles.filter(a => a.category === sectionName).slice(0, 3);
                  if (sectionArticles.length === 0) return null;

                  return (
                    <div key={sectionName} className="mb-24">
                      <SectionHeader title={sectionName} onSeeAll={navigateToCategory} />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sectionArticles.map(article => (
                          <div 
                            key={article.id} 
                            className="group cursor-pointer border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
                            style={{ backgroundColor: OFF_WHITE_HEX }}
                            onClick={() => navigateToArticle(article.id)}
                          >
                            <div className="w-full aspect-[4/3] border-b-2 border-black overflow-hidden relative">
                              <img 
                                src={article.image} 
                                alt={article.title}
                                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:filter-none transition-all duration-500"
                              />
                              <div 
                                className="absolute top-2 right-2 border border-black px-2 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                style={{ backgroundColor: OFF_WHITE_HEX }}
                              >
                                {article.readTime}
                              </div>
                            </div>
                            <div className="p-6">
                              <h3 
                                className="text-2xl font-black uppercase leading-none mb-3 group-hover:text-[var(--highlight)] transition-colors" 
                                style={{'--highlight': HIGHLIGHT_COLOR} as React.CSSProperties}
                              >
                                {article.title}
                              </h3>
                              <p className="font-mono text-xs text-gray-500 mb-4 line-clamp-3">
                                {article.excerpt}
                              </p>
                              <span className="text-sm font-bold uppercase underline decoration-2 underline-offset-2">Read More</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </section>
            
            {/* NEWSLETTER - Brutalist Style - Only show if no category filter is active */}
            {!activeCategory && (
              <section 
                className="border-y-4 border-black bg-[var(--highlight)] text-white py-24" 
                style={{'--highlight': HIGHLIGHT_COLOR} as React.CSSProperties}
              >
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.8]">
                    Don't Miss <br/> The Signal
                  </h2>
                  <div className="flex flex-col md:flex-row gap-0 max-w-xl mx-auto border-4 border-black shadow-[8px_8px_0px_0px_black]">
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS" 
                      className="flex-1 px-6 py-4 text-black font-mono focus:outline-none placeholder-gray-500 uppercase"
                      style={{ backgroundColor: OFF_WHITE_HEX }}
                    />
                    <button 
                      className="px-8 py-4 bg-black text-white font-bold uppercase hover:bg-gray-900 transition-colors"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-white py-20 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                {SITE_NAME}
              </div>
              <p className="font-mono text-gray-400 max-w-sm">
                Unfiltered. Unbiased. Unapologetic. <br/>
                The new standard for digital journalism.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 text-sm font-mono uppercase">
              <div className="flex flex-col gap-4">
                <span className="text-gray-500 font-bold mb-2">Index</span>
                {CATEGORIES.map(cat => (
                  <a 
                    href="#" 
                    key={cat} 
                    onClick={(e) => { e.preventDefault(); navigateToCategory(cat); }}
                    className="hover:text-[var(--highlight)] transition-colors" 
                    style={{'--highlight': HIGHLIGHT_COLOR} as React.CSSProperties}
                  >
                    {cat}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-gray-500 font-bold mb-2">Connect</span>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">RSS Feed</a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-800 font-mono text-xs text-gray-500 flex justify-between">
            <span>© 2025 NEXUS MEDIA.</span>
            <span>DESIGNED BY AI.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}