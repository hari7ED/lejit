
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      <header className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-primary-700 font-bold tracking-widest uppercase text-xs mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 dark:text-white leading-tight">Transforming the <br /> <span className="text-primary-700">Legal Landscape</span></h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Lejit AI was born from a simple observation: the legal industry is slowed down by fragmented workflows. We're building the unified operating system for modern law.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-700 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-700 rounded-full blur-[100px]"></div>
        </div>
      </header>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-12 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-700 rounded-2xl flex items-center justify-center mb-8">
              <span className="material-icons-round text-3xl">rocket_launch</span>
            </div>
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              To simplify legal work for law firms, corporates, and citizens by integrating AI-powered creation, management, and payment tools into one seamless ecosystem.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-12 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-700 rounded-2xl flex items-center justify-center mb-8">
              <span className="material-icons-round text-3xl">visibility</span>
            </div>
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              To become the global standard for end-to-end legal management, where technology enables legal professionals to focus on high-value strategy rather than administrative overhead.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold">Company Values</h2>
          <div className="w-20 h-1 bg-primary-700 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: 'Innovation', icon: 'lightbulb', desc: 'Pushing the boundaries of what AI can do for the legal profession.' },
            { title: 'Trust', icon: 'verified_user', desc: 'Security and privacy are at the heart of everything we build.' },
            { title: 'Clarity', icon: 'filter_center_focus', desc: 'Making complex legal workflows intuitive and easy to navigate.' }
          ].map((v) => (
            <div key={v.title} className="text-center group p-8 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-700 mx-auto mb-8 transition-all group-hover:scale-110 group-hover:bg-primary-700 group-hover:text-white">
                <span className="material-icons-round text-4xl">{v.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-4">{v.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-10">Ready to modernize your legal practice?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-800 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all">Get Started Free</button>
            <button className="border-2 border-white/30 px-10 py-4 rounded-xl font-bold text-lg hover:border-white transition-all">Schedule a Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
