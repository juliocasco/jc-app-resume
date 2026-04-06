// src/app/page.js
export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="text-center border-b border-gray-300 pb-8">
        <h1 className="text-5xl font-bold tracking-tight">Julio Casco</h1>
        <p className="mt-2 text-lg text-gray-600">
          Tampa, Florida • Economics Student &amp; Entrepreneur
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-gray-500">
          <a href="mailto:your.email@example.com" className="hover:text-gray-900 transition-colors">
            your.email@example.com
          </a>
          <span>(813) 555-1234</span>
          <a href="https://linkedin.com/in/juliocasco" target="_blank" className="hover:text-gray-900 transition-colors">
            linkedin.com/in/juliocasco
          </a>
          <a href="https://x.com/IamJulioCasco" target="_blank" className="hover:text-gray-900 transition-colors">
            @IamJulioCasco
          </a>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="mt-10">
        <h2 className="uppercase text-sm tracking-widest font-semibold text-gray-500 mb-3 border-b border-gray-200 pb-1">
          Professional Summary
        </h2>
        <p className="leading-relaxed text-gray-700">
          Economics student at the University of South Florida with a minor in Entrepreneurship. 
          Passionate about venture capital, private equity, and building scalable businesses. 
          Currently leading initiatives with the Private Equity and Venture Capital Club at USF 
          and running CxMedia as CEO &amp; Entrepreneur.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="mt-12">
        <h2 className="uppercase text-sm tracking-widest font-semibold text-gray-500 mb-3 border-b border-gray-200 pb-1">
          Education
        </h2>
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-semibold">University of South Florida</h3>
            <p className="text-gray-600">B.S. in Economics • Minor in Entrepreneurship</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            Tampa, FL<br />
            Expected Graduation: May 2027
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-12">
        <h2 className="uppercase text-sm tracking-widest font-semibold text-gray-500 mb-3 border-b border-gray-200 pb-1">
          Experience
        </h2>
        <div className="mb-8">
          <div className="flex justify-between">
            <h3 className="font-semibold">Private Equity and Venture Capital Club at USF</h3>
            <p className="text-sm text-gray-500">Tampa, FL • 2024 – Present</p>
          </div>
          <p className="text-gray-600">Member / Analyst</p>
        </div>

        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold">CxMedia</h3>
            <p className="text-sm text-gray-500">Tampa, FL • 2023 – Present</p>
          </div>
          <p className="text-gray-600">Founder &amp; CEO</p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-12">
        <h2 className="uppercase text-sm tracking-widest font-semibold text-gray-500 mb-3 border-b border-gray-200 pb-1">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Business Analytics</span>
          <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Financial Modeling</span>
          <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Venture Capital</span>
          <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Entrepreneurship</span>
          <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">HTML / CSS / JS</span>
          <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Tailwind CSS</span>
        </div>
      </section>

      <footer className="mt-16 text-center text-xs text-gray-400">
        Built with Next.js + Tailwind CSS • © 2026 Julio Casco
      </footer>
    </main>
  );
}