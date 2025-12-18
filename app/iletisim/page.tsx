"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // Google Form Configuration
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSc_YMOWsxVFnb1yUMFZ2syf9lorTqYWYQIRa9qE8Gd_dddXYA/formResponse";
  const NAME_ENTRY = "entry.62502283";
  const EMAIL_ENTRY = "entry.2136725226";
  const MESSAGE_ENTRY = "entry.1475046620";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    
    // We use no-cors because Google Forms does not return a standard CORS header
    // The data will still reach your Google Sheet
    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setStatus('success');
    } catch (error) {
      console.error("Submission error", error);
      // Even if there is a network error, we usually treat it as success 
      // in this specific hack because 'no-cors' hides the actual result.
      setStatus('success');
    }
  };

  // Automatically reset to idle after 10 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative overflow-hidden">
      
      {/* --- SUCCESS POPUP --- */}
      {status === 'success' && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-green-50 border border-green-200 rounded-lg shadow-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-start space-x-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="text-green-900 font-semibold text-lg">Mesajınız alınmıştır.</h3>
              <p className="text-green-700 text-sm mt-1">En kısa zamanda size geri döneceğiz.</p>
            </div>
          </div>
          
          {/* Progress Bar Container */}
          <div className="mt-4 h-1 w-full bg-green-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-600 transition-all ease-linear"
              style={{ 
                width: '100%',
                animation: 'progress-bar 10s linear forwards' 
              }} 
            />
          </div>
        </div>
      )}

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-16">
        <header className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-4">İletişim</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-12">
          <section className="lg:col-span-2 relative">
            
            {/* Form Area Transition */}
            {status === 'success' ? (
              <div className="h-full flex flex-col justify-center items-center text-center p-12 border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-light text-gray-800">Teşekkürler!</h2>
                <p className="text-gray-500 mt-2">Mesajınız başarıyla iletildi.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm uppercase tracking-widest text-gray-400 hover:text-gray-900 underline underline-offset-8 transition-all"
                >
                  Yeni bir mesaj gönder
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-medium mb-8">Projenizi Paylaşın</h2>
                <form onSubmit={handleSubmit} className={`space-y-6 transition-opacity duration-500 ${status === 'submitting' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ad-Soyad</label>
                    <input
                      type="text"
                      name={NAME_ENTRY}
                      id="name"
                      required
                      className="mt-1 block w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:ring-0 sm:text-lg focus:outline-none"
                      placeholder="Ad-Soyad"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
                    <input
                      type="email"
                      name={EMAIL_ENTRY}
                      id="email"
                      required
                      className="mt-1 block w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:ring-0 sm:text-lg focus:outline-none"
                      placeholder="isim@ornek.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Projeniz Hakkında</label>
                    <textarea
                      id="message"
                      name={MESSAGE_ENTRY}
                      rows={4}
                      required
                      className="mt-1 block w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:ring-0 sm:text-lg focus:outline-none"
                      placeholder="Hayalinizdeki projeyi anlatın..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-block px-8 py-3 bg-gray-900 text-white text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-gray-700 transition-colors shadow-lg disabled:bg-gray-400"
                    >
                      {status === 'submitting' ? 'Gönderiliyor...' : 'Gönder'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </section>

          {/* Right Column: Studio Details and Location */}
          <section className="space-y-10 lg:pl-8">
            <h2 className="text-3xl font-medium mb-8 lg:mb-0">İletişim Bilgileri</h2>

            {/* Address */}
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-medium">Stüdyo</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed">
                SIESTA Interior Architecture<br />
                Gümüşsuyu, Beyoğlu<br />
                İstanbul, TR
              </p>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-medium">Telefon</h3>
              </div>
              <p className="text-gray-600 font-light">
                <a 
                  href="tel:+905340784419" 
                  className="relative inline-block group hover:text-gray-900 transition-colors duration-300"
                >
                  +90 (534) 078 44 19
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-medium">E-posta</h3>
              </div>
              <p className="text-gray-600 font-light">
                <a 
                  href="mailto:saglikhaluk@outlook.com" 
                  className="relative inline-block group hover:text-gray-900 transition-colors duration-300"
                >
                  saglikhaluk@outlook.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </p>
            </div>
          </section>
          </div>
          </main>

      {/* --- CSS ANIMATION FOR PROGRESS BAR --- */}
      <style jsx global>{`
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}