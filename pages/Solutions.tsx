
import React from 'react';

const Solutions: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase tracking-widest mb-6">Our Solutions</span>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-8">
          Tailored AI for the <span className="text-primary-700">Legal Ecosystem</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Lejit AI transforms fragmented legal workflows into a unified, intelligent experience for enterprises, firms, and individuals.
        </p>
      </section>

      <section className="space-y-32 py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-primary-700">
                <span className="material-icons-round text-3xl">corporate_fare</span>
              </div>
              <h2 className="text-4xl font-display font-bold">Enterprise Legal Teams</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Modernize your corporate legal department with AI-driven contract management, risk assessment, and cross-departmental collaboration. Reduce external counsel spend and accelerate deal cycles.
              </p>
              <ul className="space-y-4">
                {['Automated contract review and compliance checks', 'Centralized dashboard for global legal operations', 'Seamless integration with ERP and CRM systems'].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="material-icons-round text-green-500">check_circle</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="text-primary-700 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                Learn about Enterprise <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEh8gcNTWaC8NVlU4Gw6jMG0PclWU-bPmA2NB2lNZCMXouQ_dBasRFOCL-VZqPCC17eAJ47lVY4Bb_czQGTAcmgvyhYwj6vdfhDtsmrTHXrmXK-8rOgqtkdKf45GccEeHJRuGLpqxZXulFhQSs0c6XE9qN3c4zd1qqEBYjEWfzrJO_pgQToZBsPXHSEIaFNsPKF8i6M8IElxW5zMYzKUv3rX9P6EtTTIqM-w5CCdyeQM1AivdpQ4SHsvNSfdJmoXKgApV_hw2gNhQ" alt="Enterprise Workspace" className="w-full h-auto" />
                <div className="absolute bottom-6 left-6 right-6 glass-nav p-6 rounded-2xl border border-white/20">
                  <p className="text-xs font-bold text-primary-700 uppercase tracking-widest mb-1">Top Benefit</p>
                  <p className="text-lg font-bold">40% reduction in manual review time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="flex-1 space-y-8">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-700">
                <span className="material-icons-round text-3xl">gavel</span>
              </div>
              <h2 className="text-4xl font-display font-bold">Law Firms & Solo Practitioners</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Scale your practice without increasing overhead. Lejit AI handles the heavy lifting of document generation, research, and client communication, allowing you to focus on high-value legal strategy.
              </p>
              <ul className="space-y-4">
                {['Automated case summaries and research assistants', 'White-labeled client portal for better engagement', 'Integrated billing and time-tracking AI'].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="material-icons-round text-green-500">check_circle</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="text-primary-700 font-bold flex items-center gap-2 group">
                Scale your practice <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPiqkjgb9UzeLEk8ZZj_YmPlZwHYaLXD96cVQ_mISOYouEu6LZaLPcY0JXZKoqnKWgjQvJgFiy-rWM2zbl_5paUx_qVY2i6Gc-3e4eLQMwWhXKOG1Jt9rEzxfakOetPcXjt307ecU9-fgdqx8TLE95ggfxbk1AbLsstv_oDEU4s523ir7SVgUFhSD1VFqodY8sqY8psTaMhoi688PbFgJ59cYrn4Tn6DNynahnExqCoiaQOuL5kNMeWUdNMMLG4dGKPnkNGI8ojmI" alt="Law Firm Scaling" className="w-full h-auto" />
                <div className="absolute bottom-6 left-6 right-6 glass-nav p-6 rounded-2xl border border-white/20">
                  <p className="text-xs font-bold text-primary-700 uppercase tracking-widest mb-1">Proven Impact</p>
                  <p className="text-lg font-bold">Save 15+ hours per week per lawyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to see the platform in action?</h2>
          <p className="text-slate-400 text-xl mb-12">Join over 100,000 legal professionals and consumers who are simplifying their legal journey with Lejit AI.</p>
          <button className="bg-white text-primary-800 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all flex items-center gap-3 mx-auto">
            Request a Solution Demo <span className="material-icons-round">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
