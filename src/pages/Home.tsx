import React from 'react';
import { motion } from 'framer-motion';
import {  Users, Home, Leaf, ArrowRight } from 'lucide-react';
import Nav from '../components/Nav'; // On réutilise ton composant Nav
import Footer from '../components/Footer';

const App: React.FC = () => {
  const brandColor = "#8DC63F";
  //const natureDark = "#1A2F15"; // Un vert très sombre pour remplacer l'anthracite

  const accommodations = [
    {
      title: "Immersion Stagiaire",
      desc: "Logement en dortoir écologique avec accès complet aux zones d'apprentissage (maraîchage, élevage).",
      features: ["Wifi inclus", "Repas de la ferme", "Formation incluse"],
      price: "Formule Apprentissage"
    },
    {
      title: "Résidence Personnel",
      desc: "Studios privatifs pour nos collaborateurs longue durée, au cœur de l'exploitation.",
      features: ["Espace privé", "Cuisine équipée", "Proche exploitation"],
      price: "Contrat Travail"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8DC63F]/10 border border-[#8DC63F]/20 mb-6"
            >
              <Leaf size={14} color={brandColor} />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#333333]">Agro-Tourisme Durable</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-[#1A2F15] mb-8">
              CULTIVER <br /> 
              <span style={{ color: brandColor }}>L'AVENIR.</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
              Bienvenue sur notre exploitation. Plus qu'une ferme, un lieu d'échange où tourisme rime avec <span className="font-bold text-[#1A2F15]">apprentissage et vie communautaire</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#1A2F15] text-white font-bold rounded-xl hover:shadow-xl transition-all">
                Réserver un Séjour
              </button>
              <button className="px-8 py-4 border-2 border-gray-200 text-[#1A2F15] font-bold rounded-xl hover:border-[#1A2F15] transition-all">
                Postuler (Stage/Job)
              </button>
            </div>
          </div>

          {/* Visuel principal (Style DAS) */}
          <div className="flex-1 relative">
            <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" 
                alt="Ferme" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <p className="text-3xl font-black text-[#1A2F15]">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Biologique & Local</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION LOGEMENTS (STAGIAIRES & PERSO) --- */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-4 text-center">Hébergements</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1A2F15] text-center">
              Vivre à la <span style={{ color: brandColor }}>ferme.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodations.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#8DC63F]/10 rounded-xl flex items-center justify-center mb-6 text-[#8DC63F]">
                    {i === 0 ? <Users size={24} /> : <Home size={24} />}
                  </div>
                  <h4 className="text-3xl font-black text-[#1A2F15] mb-4">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed mb-8">{item.desc}</p>
                  <ul className="space-y-3 mb-10">
                    {item.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]"></div> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">{item.price}</span>
                  <button className="flex items-center gap-2 font-black text-sm uppercase tracking-tighter hover:text-[#8DC63F] transition-colors">
                    Détails <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FORMULAIRE DE CONTACT / STAGE --- */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="bg-[#1A2F15] rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8DC63F] blur-[120px] opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-black tracking-tighter mb-6 text-[#8DC63F]">Devenez membre de l'aventure</h2>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto">
              Que ce soit pour une semaine de stage ou une saison complète, envoyez-nous votre profil.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <input type="text" placeholder="Votre Nom" className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#8DC63F]" />
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#8DC63F]" />
              <select className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#8DC63F] col-span-1 md:col-span-2 text-gray-400">
                <option>Vous postulez pour :</option>
                <option>Stage Agro-écologie</option>
                <option>Poste Permanent</option>
                <option>Tourisme / Accueil</option>
              </select>
              <button className="col-span-1 md:col-span-2 py-4 bg-[#8DC63F] text-white font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-transform">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;