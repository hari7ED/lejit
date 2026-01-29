
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="pt-24">
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-primary-700 font-bold uppercase tracking-widest text-xs mb-4">Pricing Plans</h2>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight">Transparent pricing for <br className="hidden md:block"/> teams of all sizes.</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Lejit AI connects your entire legal workflow. Choose the plan that fits your practice and start scaling your firm today.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-primary-700' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-slate-200 dark:bg-slate-700 rounded-full relative p-1 transition-colors"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-primary-700' : 'text-slate-400'}`}>Annually</span>
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Save 20%</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-32 grid md:grid-cols-3 gap-8">
        {[
          { name: 'Starter', price: isAnnual ? 39 : 49, desc: 'Best for solo practitioners and independent consultants.', popular: false, features: ['1 User seat', '10GB Document storage', 'Standard AI Research (50/mo)', 'Mobile & Web access'] },
          { name: 'Professional', price: isAnnual ? 99 : 129, desc: 'Ideal for growing law firms needing collaborative tools.', popular: true, features: ['Up to 10 User seats', '100GB Document storage', 'Unlimited AI Legal Research', 'Doc Automation & Templates', 'Client Portal Access'] },
          { name: 'Enterprise', price: 'Custom', desc: 'Scale for corporate legal departments and large-scale firms.', popular: false, features: ['Unlimited User seats', 'Unlimited Storage', 'Custom AI Model Training', 'SSO & Enterprise Security', 'Dedicated Account Manager'] }
        ].map((plan) => (
          <div key={plan.name} className={`bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 border-2 transition-all ${plan.popular ? 'border-primary-700 shadow-2xl scale-105 z-10' : 'border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl'}`}>
            {plan.popular && <div className="bg-primary-700 text-white text-[10px] font-bold px-4 py-1.5 rounded-full inline-block mb-6 uppercase tracking-widest">Most Popular</div>}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-slate-500 text-sm mb-8 h-10">{plan.desc}</p>
            <div className="mb-10">
              <span className="text-5xl font-extrabold tracking-tight">{typeof plan.price === 'number' ? `$${plan.price}` : plan.price}</span>
              {typeof plan.price === 'number' && <span className="text-slate-500 ml-2 font-medium">/month</span>}
            </div>
            <button className={`w-full py-4 rounded-2xl font-bold transition-all mb-10 ${plan.popular ? 'bg-primary-700 text-white shadow-xl shadow-primary-700/20' : 'border-2 border-slate-200 hover:border-primary-700 text-primary-700'}`}>
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
            </button>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Features included</p>
              <ul className="space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-icons-round text-green-500">check_circle</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pricing;
