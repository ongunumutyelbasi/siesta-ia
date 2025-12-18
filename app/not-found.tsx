// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      {/* Large subtle 404 */}
      <h1 className="text-9xl font-extralight text-gray-200">404</h1>
      
      <div className="mt-4">
        <h2 className="text-2xl font-light text-gray-900 tracking-tight">
          Sayfa Bulunamadı
        </h2>
        <p className="mt-4 text-gray-500 font-light max-w-sm mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
          Ana sayfaya dönebilir veya başka bir sayfayı ziyaret edebilirsiniz.
        </p>
      </div>

      <Link 
        href="/" 
        className="mt-10 px-8 py-3 border bg-gray-900 border-gray-900 text-sm font-light hover:bg-gray-700 hover:text-white transition-all duration-300"
      >
        Ana Sayfaya Dön
      </Link>
    </main>
  );
}