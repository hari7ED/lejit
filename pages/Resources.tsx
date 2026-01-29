
import React from 'react';

const Resources: React.FC = () => {
  return (
    <div className="pt-24">
      <header className="bg-slate-50 dark:bg-slate-900/50 py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-extrabold mb-6">Resources Hub</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">Insights, guides, and documentation to help you modernize your legal workflow.</p>
          <div className="relative max-w-2xl mx-auto">
            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full pl-12 pr-4 py-4 rounded-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl outline-none focus:ring-2 focus:ring-primary-700 transition-all" placeholder="Search knowledge base, guides, or white papers..." />
          </div>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold mb-12">Featured Content</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-primary-800 text-white p-12 shadow-2xl">
            <div className="relative z-10 flex flex-col h-full">
              <span className="bg-white/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-6">White Paper</span>
              <h3 className="text-3xl font-bold mb-6">The State of AI in Legal Practice 2024</h3>
              <p className="text-primary-100 mb-10 text-lg">An exhaustive report on how top-tier law firms are integrating generative AI into their daily operations and billing cycles.</p>
              <button className="bg-white text-primary-800 font-bold px-8 py-4 rounded-xl self-start hover:bg-slate-100 transition-colors">Download Now</button>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-10">
              <span className="material-icons-round text-[250px]">description</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Guides', icon: 'menu_book', color: 'blue' },
              { title: 'Webinars', icon: 'video_library', color: 'purple' },
              { title: 'Blog', icon: 'article', color: 'emerald' },
              { title: 'Help Center', icon: 'help_outline', color: 'orange' }
            ].map((cat) => (
              <div key={cat.title} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors bg-slate-100 group-hover:bg-primary-700 group-hover:text-white">
                  <span className="material-icons-round">{cat.icon}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{cat.title}</h4>
                <p className="text-sm text-slate-400">Master the platform with deep-dives.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
