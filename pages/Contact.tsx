
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-primary-700 font-bold uppercase tracking-widest text-xs mb-4 block">Contact Us</span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-8 leading-tight">Get in touch with <br /> our <span className="text-primary-700">legal tech experts</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              Whether you're a large corporation, a law firm, or a citizen needing legal assistance, we're here to help you simplify your workflow.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: 'alternate_email', title: 'Email Us', desc: 'contact@lejit.ai' },
                { icon: 'location_on', title: 'Office', desc: 'Lejit AI Software Pvt Ltd, Tech Park, City' },
                { icon: 'headset_mic', title: 'Support', desc: 'Available 24/7 for Enterprise Clients' }
              ].map((c) => (
                <div key={c.title} className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary-700">
                    <span className="material-icons-round text-2xl">{c.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{c.title}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-700 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-700 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-700 transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Organization Type</label>
                <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-700 transition-all">
                  <option>Law Firm</option>
                  <option>Corporate Legal Department</option>
                  <option>Independent Lawyer</option>
                  <option>Individual</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-700 transition-all" placeholder="Tell us about your needs..."></textarea>
              </div>
              <button className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-4 rounded-xl shadow-xl shadow-primary-700/20 transition-all active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
