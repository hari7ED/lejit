
import React from 'react';

const Platform: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <span className="text-primary-700 font-bold uppercase tracking-widest text-xs mb-4 block">The Platform</span>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 dark:text-white leading-tight">
          A unified platform for <br className="hidden md:block" /> <span className="text-primary-700">legal work</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Lejit connects intake, matter management, expert selection, document creation, communication, and payments. Instead of juggling disconnected tools, you run legal work end-to-end in one place.
        </p>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold uppercase tracking-widest text-xs mb-2 block">Core Modules</span>
            <h2 className="text-4xl font-display font-bold">Everything you need, integrated</h2>
            <p className="text-slate-500 mt-4">Six powerful modules that work together seamlessly to handle every aspect of legal work.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Case Management', desc: 'Central hub for all your legal cases', icon: 'folder_shared', points: ['Create & categorize matters', 'Document management', 'Track status and deadlines', 'Assign team permissions'] },
              { title: 'Firm / Lawyer Matching', desc: 'Find the right legal expertise', icon: 'groups', points: ['Capture user needs via forms', 'Support comparison selection', 'Suggest suitable law firms', 'Track engagement outcomes'] },
              { title: 'Document Automation', desc: 'Generate documents faster', icon: 'description', points: ['Generate drafts from inputs', 'Store and reuse clauses', 'Standardize agreements', 'Version control & audit trails'] },
              { title: 'Communication & Collaboration', desc: 'Keep everyone in sync', icon: 'chat', points: ['Secure messaging', 'File sharing & annotations', 'Centralized updates', 'Activity notifications'] },
              { title: 'Payments & Agreements', desc: 'Streamline billing and contracts', icon: 'payment', points: ['Manage representation digitally', 'Generate invoices automatically', 'Track & process payments', 'Payment history & reporting'] },
              { title: 'Learning / Student Mode', desc: 'Train the next generation', icon: 'school', points: ['Guided flows for practice', 'Feedback and assessment tools', 'Safe environment for learning', 'Integration with programs'] }
            ].map((mod) => (
              <div key={mod.title} className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-700 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-primary-700 group-hover:text-white">
                    <span className="material-icons-round text-3xl">{mod.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{mod.title}</h3>
                    <p className="text-slate-500 text-sm">{mod.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {mod.points.map((p) => (
                    <div key={p} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-icons-round text-green-500 text-lg">check_circle</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-display font-bold mb-16">See the platform in action</h2>
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">Get a personalized demo and see how Lejit can transform your legal workflows.</h3>
            <button className="bg-primary-700 hover:bg-primary-800 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center gap-3 mx-auto">
              Book a Demo <span className="material-icons-round">arrow_forward</span>
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
