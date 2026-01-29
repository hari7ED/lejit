
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
              Legal Work <span className="text-primary-700">Simplified.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Our gen-AI-powered platform transforms the legal processes by integrating everything from matter creation, finding a suitable law firm, representation agreement, case documents creation, communications, to payment into one seamless system. Say goodbye to complicated, fragmented, disconnected workflows—Lejit makes legal work effortless for law firms, corporates and citizens!
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#" className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA9C8y7m7XrYS_EofmW93-FehjEMvVI6jMeLi5TrBOesr9lzf0eH7v1aN0pakhPNGII3YRUqNstu2XCdOkuL0aiVjMolgJWrQ-XJDLEDPm6sW9_17A_UsNrCopppDF6M7hguzkrqKwkZqROIx2QViux49jGi_Dp_3SR2SHGdagFbdlhmgjOANWqhgl3TCk4XOOH2JUKq4LC1D8ZEFaVFvBMxP7aLXsko5HpFiRm7TRd_pLNO8srl-vrU8ZTvwBXxEcoeOgUjTKuoc" alt="Apple" className="h-6" />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase text-slate-400">Download on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh-cOC53ggd7cLFj9c54YQ0UW771dHo6V-YBq_jJybK_4ssjpglfRH1VTem3d2y5dS0YZ46RzP9nLzjMuEN7U_mAnZFNMl3xmbIPxdpdRISU4IeT5tDbLk6MEXZ_wT89Exbop_X9rGLd2hCsxeheM0nDpOOWlFHwbLelL7Y2xd2nLT3MpiwOK871LWdAneee_lmuK4ffpYJ_qfm5Bv6UzCfGPMYsa_gLDQDlFD4F3V-mEUHerAPK2faWSn9n1SABiDHU1Kr8JvhLc" alt="Google Play" className="h-6" />
              </a>
              <a href="#" className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-icons-round text-primary-700">public</span>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase text-slate-400">Open Web App</p>
                  <p className="text-sm font-bold">access.lejit.ai</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl relative">
            <div className="absolute -inset-10 bg-primary-100 rounded-full blur-[100px] opacity-20 -z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtdX6zmoqgBt_Ex7qjQYJ307RkuGLTA0G6j3kFCSatx0D0-db7GsiyhYY8qCdPcEe03wyJ_P6EuMCFO9_1wn20btX2VjfXRNIbcteklBMI9W6ACaSbKilXZJmLJ8ldy3iBB0MJ_Khj3NR9QmGy_IUT4MT_nbP5QjLApVTb2xDYDWbhY_IBWJcwIR4ZRW8aBG8N9liZuaE99hYJtlprYFL_mhh5AhoYxDGS9ujThAVzvX9OmYHNSPnuEwwFGyb5aVwMX1AuE-9tFL4" 
              alt="Legal Professional" 
              className="w-full rounded-[2.5rem] shadow-2xl border-8 border-white dark:border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { role: 'Corporate Legal', desc: 'Automate all your corporate legal matters in one place, save cost.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxmxaxdEil2jY8HLgCMZgpuAY4yTv7k8062d3vlbdBEb4us4P243-7-FIxOKxurCHtP3fK9axMERbc9v61lzeL2tFdjDoZiemV-uNaS7KwMiUgSSMYD_29jG_U8fVg-Ls3jP4POOQTX0ShWSkrkghGwKIG4YGTjvACuhnR_gwmTFVhqM88lZ8qLZrrARJoqS0s-M9vvl4yI9A69m7C2DEZ7LtSqMKMFGkpYC87fCrLxe-bSmh5lN2iU2ib57_4WaOr6IxmH6nMYdk' },
              { role: 'Law Firms', desc: 'Let us handle the research and paperwork while you elevate client relationships.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzCBH2ORiiZYvt0KA9oxE1qgqS6w-NbQT4tu9psLxiuxdd0sSxIPcExZSS8py73WtZD3hMg4FvtA529y2Dm4f9rfVaA_T8EdYJ-4xLJMD9In2ZwVxwUsv4U1ExMa3r9NdDf82Xz1Cg-mY3w3ois1NULPXoFd42dBFT-9tZzk3reQxRrqWgoKRfPmV5yuB95S5fI4HvAbO8cehMVCJEVWMPmU7gUuhpWrxOykBJFisF7R90dRRPLSRiOJNuKVmlNhYfoQYp2onXETc' },
              { role: 'Lawyers', desc: 'Let us handle the research and paperwork while you elevate client relationships.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD19-t58VN-jBCzvGxlYXDadvmMfmy0PrZz5vsZGZZLWbQTbb1kQYRcmS0ywrkrwGei4NCOX-rQNhVq6od6W74m5JuwgtstIca80uKFwlGCGsTsZ_siPgA6EPT6rRu1dVwJhuA4l5YpgKuUxramFF1FSgasrX0ETN05caW3PD_YzpPlcHk8-rwHrCtlfDDA7NPWBfFKbXohm2koqf8pAZ5Zw4gr8mw-fBBYTjFI6zINW22WNY46PjwAPGz1f_tpDD3IjhJ-mMiGyM' },
              { role: 'Law Students', desc: "We've made a perfect learning tool. It helps students prepare for a career in law.", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmUEcjT6w5EaCze9_L4D4IiZyux9NoqPoeH8OHt2ZS77_3yk9mNKE88IbaPC2eaOWZfN0yzIn3in3RVqf_U9iPjxtgHIm6wAyqOdd5QElQTNcY2shDjA8l--Kdhn198WzlnhvHk8a0DU1rwPJsi5WUjPrT2N5AbYOoZSQ0jH0gIO5SANy_2dkD_p5hMR7_SC0N44IyGLJ1TAqdCgIzR7h_B2njYa3mpgmLzedNHqMqXjOmDtCQUHZ5uxbo7lYZUvAYSVnzeURsBxM' },
              { role: 'Legal Consumers', desc: "From deciphering complex terms to understanding rights, we've got you covered.", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE_tF5-wluJfmgO3MJlsVBbr1C3gruhbaKLTwwx4LBeOZiiJB89r6AkDCZ5n3p9k1TSlz6Z1orKo21ZrI9JcOXNc6Y-ojfG7BlYiOgxVNpf_wPNP4VoMcwODEGNifjoYjwHqaf2B-49tsb-ORhl6TsIqrDnVQ3LpplEKPpdf4AeIl6MnCv_kWIBuj07-Xm2kpjku4eN9tCHqGgeOvfEePRFYrr9cmh8mHxKzfbdMOfN6f2ZpieOEA8FuN-I4d-KIxQod1NRssnPls' },
            ].map((item) => (
              <div key={item.role} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                <p className="text-primary-700 font-bold mb-2">AI for</p>
                <h3 className="text-xl font-bold mb-4">{item.role}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">{item.desc}</p>
                <div className="mt-auto overflow-hidden rounded-2xl w-full">
                  <img src={item.img} alt={item.role} className="w-full grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="bg-primary-700 text-white px-10 py-4 rounded-full font-bold hover:bg-primary-800 transition-colors shadow-xl shadow-primary-700/20">
              Start free trial
            </button>
          </div>
        </div>
      </section>

      {/* Stress & Numbers Section */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-8">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOS8cLiyTnIZpmPw8-pSnTIDzhoRUkU43NBRzrUbgb_89wy0M1deJcqKc9PVzJuILpFlO0zjm3n3CtbS-YHHNh-LxLhz0wpFncDo-c2p-vV9ZqubIeILraD6LxnE3PaIkzihoB0pAJ3iL6C10Aesg2Jfs20NyNTWFYcSqmujSDTzabMj4udIxQFgiLOr6vIv8CtrDY1X5kzAhrU7_SoXktvVN57EXoYAw7YAYw-WBifKGtIYapB8oIdQlBOiDQ4BZ4G4ZZTcyZyd4" alt="Lejit Mobile" className="w-24 rounded-2xl" />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-primary-700 rounded flex items-center justify-center font-bold text-[10px]">L</div>
                <span className="text-sm font-bold uppercase tracking-widest text-primary-400">Lejit</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">Solve your stress now</h2>
              <p className="text-slate-400">Manage all your legal needs in one place with Lejit</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Over</p>
            <p className="text-7xl font-black text-primary-500 mb-1">100,000</p>
            <p className="text-xl font-medium text-slate-300">legal questions answered</p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Lejit provides legal assistance across a wide range of practice areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Corporate Law', 'Criminal Law', 'Constitutional Law', 'Banking & Finance',
              'Insurance Law', 'Real Estate', 'Family Law', 'Employment Law',
              'Personal Injury', 'Debt Recovery', 'Succession & Wills', 'MSME Legal'
            ].map((area) => (
              <div key={area} className="bg-white/10 backdrop-blur-md border border-white/10 text-white p-6 rounded-2xl font-bold hover:bg-white hover:text-primary-800 transition-all cursor-default shadow-lg">
                {area}
              </div>
            ))}
          </div>
          <p className="mt-12 text-primary-200 italic font-medium">And more ...</p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-extrabold text-center mb-16">Videos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Lejit AI - Transforming Legal Industry', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7SPI1swhDBc0ndg1Sd_WyPgq217-Ww3XfYfh8X5cF_E9W8Gid3sz8motbgM90ZZ73DUfNrWbsvKuoEDNtWLtL16a0cUsuoJHftkQkGbNulGpd9ExfGdWjzD_hKIFK_fkI8r-pCZ6sowAFX4HFWvYR-F8VLUYgWiD2uLYPSePnYLs77rwjNFgKvn1kY9NRzxTLf8tsT2n2e55Cirm4Ua4mY4ztcDL3Zj1nrwvLJxyeFt8qbNujHjsMCiwk70fhEFJ1sO9bEMrlyBE' },
              { title: 'AI-Powered Legal Drafting with Lejit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATc4z9XJ6lwvSw4yRGR7adUy9yvVegLYtoI7ixvfibCM9Za1Z8WA1lVYPIwl_l2dZiEQeFA2xnY_e_81SBESI9ybnYKlWoSC82x5PpaWYr89idsnlaeZiXH46qDLenBoe5Mh_dVMRVqCUAiCaVXn8TdLzvdZhWUhZ-_W3w3i03fNb5_epfMiJGgJovuWOB7TutXeMr_20oWZDq4iz7bkPafHTcAYXTOAoeQaGXO5nKoJZd3dZ_QOccBBpz2xJ4HBluDCmRzl3blTg' },
              { title: 'Seamless Client Updates and Management', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPwhI-oBpwemSqFd435k8KCCXO9QMG2Re2HG1ZBbeITTu9laKwCQGgTbmgK6Ar-ak4_i1fujjDhBKeC06DwgDwKTMRkfwINtz-SGQ5t_4ks7q8awGrSK-_S0XdBeQOmOcI-TOYKCjP5yYBgZA_HLF8ZwVuUVpX2AQ9HJM0_V699IqwVBG5mHUMGIBIxrCdzbtgLdnlpNA5jesDkfleQl6IH_fA5gm6SSJw7aKT_vVE8b-YXpON-qXO-3aJjvw495TyTV6GDKJm1-4' }
            ].map((video) => (
              <div key={video.title} className="group cursor-pointer">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 shadow-2xl bg-slate-200">
                  <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-icons-round text-white text-7xl">play_circle_filled</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-center group-hover:text-primary-700 transition-colors">{video.title}</h4>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="bg-primary-700 text-white px-10 py-4 rounded-full font-bold">Start free trial</button>
          </div>
        </div>
      </section>

      {/* Comparisons Section */}
      <section className="py-24 bg-blue-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-extrabold text-primary-700">For Law firms</h3>
            <ul className="space-y-5">
              {[
                "Mobile and Web app to organise and manage all case matters in one place",
                "Create law firm profile, and add team members.",
                "Receive client leads, schedule video consultations with clients",
                "Create client profiles, generate affidavits, organise case documents",
                "Automate invoicing, payments, expense tracking, and tax reports"
              ].map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="material-icons-round text-primary-700">check_circle</span>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-extrabold text-primary-700">For Corporates and Citizens</h3>
            <ul className="space-y-5">
              {[
                "Create a profile, add members",
                "Generate case notes with AI",
                "Search and find the most suitable law firms by lawyer type, location, etc.",
                "Manage representation agreement, affidavits, invoices, and all case documents",
                "Automated case document reviews and approval process online"
              ].map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="material-icons-round text-primary-700">check_circle</span>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center">
          <button className="bg-primary-700 text-white px-10 py-4 rounded-full font-bold">Start free trial</button>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-extrabold text-center mb-16 text-primary-700">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'bolt', text: 'One click access to case summaries, case laws, gen-AI enabled affidavit creation.' },
              { icon: 'auto_fix_high', text: 'AI-driven legal insights: Faster research, case analysis, and automation of manual tasks.' },
              { icon: 'groups', text: 'Full-cycle legal management: From matter creation to payment, all in one platform.' },
              { icon: 'cloud', text: 'SaaS model: Scalable solution for law firms, cooperates, and judiciary bodies.' }
            ].map((uc) => (
              <div key={uc.text} className="flex gap-6 p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <span className="material-icons-round text-primary-700 text-3xl">{uc.icon}</span>
                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{uc.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="bg-primary-700 text-white px-10 py-4 rounded-full font-bold">Start free trial</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-extrabold text-center mb-16 text-primary-700">Customer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ansar T.', role: 'A&H Associates', quote: 'Lejit allowed us to grow. You can work faster and enjoy life.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9sQ1y2_KpHPse0MgJ6pJcOTgrBT_uoBoL28GnLXF_zf_Of38N5mY9tiB873r7sxhvlvad7jhpq4vIWtYo_tpXaNPeH5QdBT7a0UmWy50oGUG1gXlnDiuHTd1-SxwzfNnY1u5mKNmWl92lwaF10xVqyKjmt-AM4eg-dyDoySSYimdVkf52k8z5w_AMJ5HJ-e1HvV0eMzSoqGTqBmQ3km9ejAi-01He0t2fOvvlO8uu-lML-YoXs6n1G8R3wRRuWg1SK3g90L9LBG8' },
              { name: 'Partner', role: 'Legal Associates Inc.', quote: 'Lejit has brought efficiency and accuracy to our legal workflows, improving both case success rates.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHaYmBEDU0cK6yqTiabZ3-7plxzvjd60z6LVFqAz5Ohftu96PM2USAQqDJFNspdYCjXCQsrMp2hZFdnlNgRx120mft9udraCnkZTYjM86XW5hNZmanryZBViZhOhGU7_QLxu_cbfE0sTn5SPUd41aq9RlGUSvZSzl_iunikpA1bAODj66oUg3JYeuC64ZjIp-jVHHl7koZXtsGQmr9BNqCeslkWEU0c1QlGepy_JK-8pMHOqEnhQFLIjomJiLSqV1WwW5P1qvRVLQ' },
              { name: 'Partner', role: 'Legal Associates Inc.', quote: 'With Lejit, our legal team can now focus on complex legal strategies rather than spending hours on manual documentation.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnTe6joXNEHdZNbcojjf96xArpJPk34JGtRXjw1jyYR-jgyS_gcfuVa_FOsiO8yxYFiGNReaMWYA6Vcpvpu5C2Syxv9vbf67loZDUw7kDwV-rD-yoQBo7LRndRvU3fiwdQ_OL_Oh3LgzzjVoGeTlPJQ_N0yV_en9Tj3FH3oY0z4nX_RGbMlF2HtKLo74tW1--mOIQ_iMHA91XURU0EVhTgkTNC-Ulp3f3AF2VbuWo_OsGixfshJaiCJ5n9G-xqB_zeEVYEV71Sp-s' }
            ].map((t) => (
              <div key={t.name + t.quote} className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-sm relative group hover:shadow-2xl transition-all duration-500">
                <span className="material-icons-round text-blue-100 dark:text-slate-700 text-6xl absolute top-8 right-10">format_quote</span>
                <p className="text-xl font-medium mb-10 relative z-10 italic leading-relaxed text-slate-700 dark:text-slate-300">“{t.quote}”</p>
                <div className="flex items-center gap-5">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary-100" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-12">
            <div className="w-3 h-3 rounded-full bg-primary-700"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          </div>
          <div className="mt-16 text-center">
            <button className="bg-primary-700 text-white px-10 py-4 rounded-full font-bold">Start free trial</button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-extrabold mb-16 text-primary-700">Leading Team Behind Our Innovative Products</h2>
          <div className="flex flex-wrap justify-center gap-20">
            {[
              { name: 'Barun Chandran', role: 'Investor', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeT5bazGEw4ZA7Gr99dBH-R68Z2-4nKa-L_fD5AA_DpkwXWPytETRKSdTYzq8ogcdlQbcf-WMovpndWK5nI-nKCe132VPAmV3yPRW-pB0_PADdgwwNuj8Ixc8NDv-_1rLYJP-n_tCMyDIek5PBh8I86XcV2su4Z19ZSvV0prDsS5LN26xfyuR19siImaitV3J68a5NauwPlkBe7C3pJQduXlftYlQMkJoteL-UnD2XDe8QKqKDlOkwqmFAFwhUeHBHXMQOEPuAdp8' },
              { name: 'Adv Vikanth Kamalakanthen', role: 'General Counsel', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg7FRWm-gz8ayYqiQtLKX5E9HXN7o2DysdQjhLmFxC-ELEW-z3X7C0TIQe61j72OGFx7eoeDHyX4hk94quhW4A6PxOP2HiEtrcnTn1fCHonNAm1LJGA27iHALAkOfX5tjd-vMskVU-H8oc9Wt6wtAO4ib_jNle-OBPyU28e_n9p2wp0n3emlWSOsmdVnnatrfqndlfaLSVCWvAyomd2_eIgNQYmvZ9RgM5hrRD6LgaJXSk-A_k3tSMoKz1xN45Hj87WyHx_JeZ9KU' }
            ].map((member) => (
              <div key={member.name} className="group text-center">
                <div className="w-64 h-64 rounded-3xl overflow-hidden mb-6 shadow-2xl relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary-700/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                <p className="text-slate-500 font-medium mb-4">{member.role}</p>
                <button className="text-primary-700 hover:text-primary-800 transition-colors">
                  <span className="material-icons-round">share</span>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <button className="bg-primary-700 text-white px-10 py-4 rounded-full font-bold">Start free trial</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
