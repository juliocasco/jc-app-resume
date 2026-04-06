// src/app/page.js
export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      {/* HEADER - Professional dark look */}
      <header className="bg-slate-900 text-white rounded-3xl px-8 py-10 text-center shadow-md">
        <h1 className="text-5xl font-bold tracking-tight">Julio Casco</h1>
        <p className="mt-3 text-xl text-slate-300">Tampa, Florida • Economics Student &amp; Entrepreneur</p>
        
        {/* Contact with proper spacing */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm">
          <a href="mailto:juliocasco@usf.edu" className="hover:text-slate-200 transition-colors">juliocasco@usf.edu</a>
          <span>(813) 555-1234</span>
          <a href="https://linkedin.com/in/juliocasco" target="_blank" className="hover:text-slate-200 transition-colors">linkedin.com/in/juliocasco</a>
          <a href="https://x.com/IamJulioCasco" target="_blank" className="hover:text-slate-200 transition-colors">@IamJulioCasco</a>
        </div>
      </header>

      <div className="mt-8 space-y-8">
        {/* SUMMARY */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="uppercase text-sm tracking-widest font-semibold text-slate-500 mb-4 border-b border-slate-200 pb-3">Professional Summary</h2>
          <p className="leading-relaxed text-gray-700">
            Economics student at the University of South Florida with a minor in Entrepreneurship. 
            Passionate about venture capital, private equity, and building scalable businesses. 
            Currently leading initiatives with the Private Equity and Venture Capital Club at USF 
            and running CxMedia as CEO &amp; Entrepreneur.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="uppercase text-sm tracking-widest font-semibold text-slate-500 mb-4 border-b border-slate-200 pb-3">Education</h2>
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="font-semibold text-lg">University of South Florida</h3>
              <p className="text-gray-600">B.S. in Economics • Minor in Entrepreneurship</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              Tampa, FL<br />
              Expected Graduation: May 2027
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
  <h2 className="uppercase text-sm tracking-widest font-semibold text-slate-500 mb-4 border-b border-slate-200 pb-3">
    Experience
  </h2>

  <div className="mb-8">
    <div className="flex justify-between items-start">
      <h3 className="font-semibold">Private Equity and Venture Capital Club at USF</h3>
      <p className="text-sm text-gray-500">Tampa, FL • 2024 – Present</p>
    </div>
    <p className="text-gray-600 mt-1">Member / Analyst</p>
    <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
      <li>Participate in private equity and venture capital analysis discussions.</li>
      <li>Support evaluation of business opportunities and investment ideas.</li>
      <li>Collaborate with peers on finance, strategy, and market research initiatives.</li>
    </ul>
  </div>

  <div>
    <div className="flex justify-between items-start">
      <h3 className="font-semibold">CxMedia</h3>
      <p className="text-sm text-gray-500">Tampa, FL • 2023 – Present</p>
    </div>
    <p className="text-gray-600 mt-1">Founder &amp; CEO</p>
    <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
      <li>Founded and manage a digital marketing company serving small and medium-sized businesses.</li>
      <li>Lead branding, website development, and digital growth strategy for clients.</li>
      <li>Oversee business development, client communication, and project execution.</li>
    </ul>
  </div>
</section>

        {/* SKILLS */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="uppercase text-sm tracking-widest font-semibold text-slate-500 mb-4 border-b border-slate-200 pb-3">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-2 bg-indigo-100 text-indigo-700 text-sm rounded-3xl font-medium">Business Analytics</span>
            <span className="px-5 py-2 bg-indigo-100 text-indigo-700 text-sm rounded-3xl font-medium">Financial Modeling</span>
            <span className="px-5 py-2 bg-indigo-100 text-indigo-700 text-sm rounded-3xl font-medium">Venture Capital</span>
            <span className="px-5 py-2 bg-indigo-100 text-indigo-700 text-sm rounded-3xl font-medium">Private Equity</span>
            <span className="px-5 py-2 bg-indigo-100 text-indigo-700 text-sm rounded-3xl font-medium">Entrepreneurship</span>
            <span className="px-5 py-2 bg-indigo-100 text-indigo-700 text-sm rounded-3xl font-medium">HTML / CSS / JS</span>
            <span className="px-5 py-2 bg-indigo-100 text-indigo-700 text-sm rounded-3xl font-medium">Tailwind CSS</span>
          </div>
        </section>
      </div>

      <footer className="mt-12 text-center text-xs text-gray-400">
        Built with Next.js + Tailwind CSS • © 2026 Julio Casco
      </footer>
    </main>
  );
}