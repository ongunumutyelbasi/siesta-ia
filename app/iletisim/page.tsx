// app/iletisim/page.tsx

import { Phone, Mail, MapPin } from 'lucide-react'; // Icons for contact details

// This page is a Server Component, as it doesn't need client-side interactivity yet.

export default function ContactPage() {
  return (
    // Outer container ensures font and background consistency
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        
        {/* Header Section */}
        <header className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-4">
            İletişim
          </h1>
        </header>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-12">
          
          {/* Left Column: Contact Form (Placeholder) */}
          <section className="lg:col-span-2">
            <h2 className="text-3xl font-medium mb-8">Projenizi Paylaşın</h2>
            
            {/* Form Placeholder - Replace with actual form logic/component */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ad-Soyad</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:ring-0 sm:text-lg transition duration-200 focus:outline-none"
                  placeholder="Ad-Soyad"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:ring-0 sm:text-lg transition duration-200 focus:outline-none"
                  placeholder="isim@ornek.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Projeniz Hakkında</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:ring-0 sm:text-lg transition duration-200 focus:outline-none"
                  placeholder="Hayalinizdeki projeyi anlatın..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-block px-8 py-3 bg-gray-900 text-white text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-gray-700 transition-colors shadow-lg"
                >
                  Gönder
                </button>
              </div>
            </form>
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
                123 Design District Rd, Suite 400<br />
                New York, NY 10012, USA
              </p>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-medium">Telefon</h3>
              </div>
              <p className="text-gray-600 font-light">
                +90 (534) 078 44 19
              </p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-medium">E-posta</h3>
              </div>
              <p className="text-gray-600 font-light">
                <a href="mailto:saglikhaluk@outlook.com" className="hover:text-gray-900 transition-colors">
                  saglikhaluk@outlook.com
                </a>
              </p>
            </div>
            
          </section>
        </div>
      </main>
    </div>
  );
}