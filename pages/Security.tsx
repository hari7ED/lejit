
import React from 'react';

const Security: React.FC = () => {
  return (
    <div className="pt-24 pb-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <span className="bg-primary-100 text-primary-700 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Security at Scale</span>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">Enterprise-grade security <br /> <span className="text-primary-700">you can trust</span></h1>
        <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Lejit AI is built on a foundation of rigorous security protocols, ensuring your sensitive legal data remains private, protected, and compliant with global standards.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 mb-32">
        {[
          { title: 'Data Encryption', icon: 'lock', desc: 'End-to-end encryption using AES-256 for data at rest and TLS 1.3 for data in transit.' },
          { title: 'SOC2 Type II', icon: 'verified_user', desc: 'Independently audited controls that meet the highest industry standards for security.' },
          { title: 'GDPR & Privacy', icon: 'policy', desc: 'Full compliance with GDPR and CCPA. We prioritize data sovereignty.' },
          { title: 'Continuous Audit', icon: 'visibility', desc: '24/7 monitoring and regular penetration testing by third-party experts.' }
        ].map((s) => (
          <div key={s.title} className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-700 rounded-xl flex items-center justify-center mb-8">
              <span className="material-icons-round text-2xl">{s.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-primary-800 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Ready for a deeper dive?</h2>
          <p className="text-primary-100 text-xl mb-12 max-w-2xl mx-auto">Download our comprehensive Security Whitepaper for detailed technical information on our architecture and compliance.</p>
          <button className="bg-white text-primary-800 px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto shadow-2xl">
            <span className="material-icons-round">download</span> Download Whitepaper (PDF)
          </button>
        </div>
      </section>
    </div>
  );
};

export default Security;
