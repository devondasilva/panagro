import React from 'react';
import { motion } from 'framer-motion';
import {  Phone, MapPin, Send, MessageSquare, Share2, Globe } from 'lucide-react';
import Nav from '../components/Nav';

const Contact: React.FC = () => {
  const brandGreen = "#8DC63F";
  //const forestDark = "#1A2F15";

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* --- SECTION ENTÊTE --- */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8DC63F] mb-6 block">Communication</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#1A2F15] leading-[0.85] tracking-tighter mb-8">
              RESTEZ EN <br /> <span style={{ color: brandGreen }}>CONNEXION.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Que vous soyez un investisseur potentiel, un futur stagiaire ou simplement curieux, notre équipe vous répond sous 24h.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- GRILLE DE CONTACT & FORMULAIRE --- */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* INFOS DE CONTACT (4 colonnes) */}
            <div className="lg:col-span-4 space-y-12">
              <ContactBlock 
                icon={<MessageSquare size={24} />} 
                title="Discutons" 
                detail="dascom2004@gmail.com" 
                sub="Disponible du lun. au ven."
              />
              <ContactBlock 
                icon={<Phone size={24} />} 
                title="Appelez-nous" 
                detail="+229 57 57 45 58" 
                sub="Urgence exploitation 24/7"
              />
              <ContactBlock 
                icon={<MapPin size={24} />} 
                title="Siège & Ferme" 
                detail="Zone Agro-Industrielle" 
                sub="Bénin, Afrique de l'Ouest"
              />

              {/* RÉSEAUX SOCIAUX */}
              <div className="pt-8 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                  <Share2 size={14} /> Suivez l'aventure
                </p>
                <div className="flex gap-4">
                  {['LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                    <a key={social} href="#" className="px-4 py-2 bg-gray-50 rounded-lg text-[9px] font-black uppercase tracking-tighter text-[#1A2F15] hover:bg-[#8DC63F] hover:text-white transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FORMULAIRE (8 colonnes) */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-2xl shadow-gray-200/50"
              >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A2F15] ml-2">Nom complet</label>
                    <input type="text" placeholder="Honore De Silva" className="w-full px-6 py-4 bg-white rounded-2xl border border-transparent focus:border-[#8DC63F] outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A2F15] ml-2">Sujet</label>
                    <select className="w-full px-6 py-4 bg-white rounded-2xl border border-transparent focus:border-[#8DC63F] outline-none transition-all font-medium appearance-none">
                      <option>Investissement</option>
                      <option>Stage / Emploi</option>
                      <option>Visite de la ferme</option>
                      <option>Autre demande</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A2F15] ml-2">Email</label>
                    <input type="email" placeholder="votre@email.com" className="w-full px-6 py-4 bg-white rounded-2xl border border-transparent focus:border-[#8DC63F] outline-none transition-all font-medium" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A2F15] ml-2">Votre Message</label>
                    <textarea rows={5} placeholder="Comment pouvons-nous vous aider ?" className="w-full px-6 py-4 bg-white rounded-2xl border border-transparent focus:border-[#8DC63F] outline-none transition-all font-medium resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button className="w-full md:w-auto px-12 py-5 bg-[#1A2F15] text-white font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-3 hover:bg-[#8DC63F] transition-all shadow-xl shadow-[#1A2F15]/10">
                      Envoyer le message <Send size={18} />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CARTE / LOCALISATION (Visuel stylisé) --- */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto h-96 bg-gray-100 rounded-[3rem] relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-[#1A2F15] rounded-3xl flex items-center justify-center mb-6 animate-bounce">
                <MapPin color={brandGreen} size={40} />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#1A2F15]">Géolocalisation de l'exploitation</p>
              <button className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase text-[#8DC63F] hover:underline">
                Ouvrir dans Google Maps <Globe size={14} />
              </button>
           </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
          PANAGRO CONTACT — 2026
        </p>
      </footer>
    </div>
  );
};

// Sous-composant pour les blocs de contact
const ContactBlock = ({ icon, title, detail, sub }: { icon: React.ReactNode, title: string, detail: string, sub: string }) => (
  <div className="flex gap-6 group">
    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1A2F15] group-hover:bg-[#8DC63F] group-hover:text-white transition-all">
      {icon}
    </div>
    <div>
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{title}</h3>
      <p className="text-xl font-black text-[#1A2F15] leading-none mb-1">{detail}</p>
      <p className="text-[10px] font-bold text-gray-400 uppercase">{sub}</p>
    </div>
  </div>
);

export default Contact;