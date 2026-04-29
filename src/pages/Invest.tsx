import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Leaf, PieChart, Info } from 'lucide-react';
import NavPanagro from '../components/Nav';
import Footer from '../components/Footer';

const Invest: React.FC = () => {
  const brandGreen = "#8DC63F";
 // const forestDark = "#1A2F15";

  const packs = [
    {
      duration: "1 Mois",
      title: "Pack Découverte",
      return: "5% ROI*",
      min: "100€",
      benefits: ["Panier bio offert", "Rapport hebdomadaire", "Retrait prioritaire"],
      color: "#F8FAFC"
    },
    {
      duration: "3 Mois",
      title: "Pack Croissance",
      return: "8% ROI*",
      min: "500€",
      benefits: ["2 Paniers bio/mois", "Visite privée", "Accès plateforme suivi"],
      color: "#F1F5F9"
    },
    {
      duration: "6 Mois",
      title: "Pack Récolte",
      return: "12% ROI*",
      min: "1 500€",
      benefits: ["Distribution mensuelle", "Arbre à votre nom", "Droit de vote projet"],
      featured: true
    },
    {
      duration: "1 An",
      title: "Pack Écosystème",
      return: "18% ROI*",
      min: "5 000€",
      benefits: ["Séjour 2 nuits offert", "Dividendes annuels", "Membre du board"],
      color: "#F8FAFC"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavPanagro />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 mb-8"
          >
            <TrendingUp size={16} color={brandGreen} />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#1A2F15]">Investissement Durable</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-[#1A2F15] leading-none tracking-tighter mb-8">
            INVESTIR DANS <br /> <span style={{ color: brandGreen }}>LE VIVANT.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed mb-12">
            Devenez acteur de la transition agro-écologique. Financez nos cycles de production et partagez les fruits de nos récoltes.
          </p>
        </div>
      </section>

      {/* --- GRILLE DES PACKS --- */}
      <section className="py-20 px-6 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((pack, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2.5rem] border flex flex-col justify-between transition-all duration-300 ${
                pack.featured ? 'bg-[#1A2F15] text-white border-transparent shadow-2xl scale-105 z-10' : 'bg-white border-gray-100 text-[#1A2F15]'
              }`}
            >
              <div>
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 block ${pack.featured ? 'text-[#8DC63F]' : 'text-gray-400'}`}>
                  Durée : {pack.duration}
                </span>
                <h3 className="text-2xl font-black mb-2 tracking-tighter">{pack.title}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className={`text-4xl font-black ${pack.featured ? 'text-white' : 'text-[#8DC63F]'}`}>{pack.return}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {pack.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide opacity-80">
                      <div className={`w-1.5 h-1.5 rounded-full ${pack.featured ? 'bg-[#8DC63F]' : 'bg-[#1A2F15]'}`}></div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className={`text-[10px] font-black mb-4 uppercase tracking-widest ${pack.featured ? 'text-gray-400' : 'text-gray-300'}`}>
                  Minimum : {pack.min}
                </p>
                <button 
                  className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                    pack.featured 
                    ? 'bg-[#8DC63F] text-white hover:brightness-110' 
                    : 'bg-[#1A2F15] text-white hover:bg-black'
                  }`}
                >
                  Choisir ce pack
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION ASSURANCE & CONFIANCE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8">
            <ShieldCheck size={40} color={brandGreen} className="mb-6" />
            <h4 className="text-xl font-black text-[#1A2F15] mb-4">Capital Sécurisé</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Vos investissements sont adossés à des actifs tangibles (terres, infrastructures, récoltes).</p>
          </div>
          <div className="flex flex-col items-center text-center p-8">
            <PieChart size={40} color={brandGreen} className="mb-6" />
            <h4 className="text-xl font-black text-[#1A2F15] mb-4">Transparence Totale</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Suivez l'évolution des cultures financées en temps réel via votre tableau de bord.</p>
          </div>
          <div className="flex flex-col items-center text-center p-8">
            <Leaf size={40} color={brandGreen} className="mb-6" />
            <h4 className="text-xl font-black text-[#1A2F15] mb-4">Impact Mesurable</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Chaque euro investi contribue à la régénération des sols et au maintien de l'emploi local.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ MINI --- */}
      <section className="py-20 px-6 bg-gray-50 rounded-[4rem] mx-6 mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Info size={24} color={brandGreen} />
            <h3 className="text-3xl font-black text-[#1A2F15] tracking-tighter">Questions Fréquentes</h3>
          </div>
          <div className="space-y-6">
            <div className="pb-6 border-b border-gray-200">
              <p className="font-black text-[#1A2F15] mb-2 uppercase text-xs tracking-widest italic">Comment est calculé le ROI ?</p>
              <p className="text-gray-500 text-sm">Le retour sur investissement est basé sur la valorisation des produits récoltés et vendus durant votre cycle de pack.</p>
            </div>
            <div className="pb-6 border-b border-gray-200">
              <p className="font-black text-[#1A2F15] mb-2 uppercase text-xs tracking-widest italic">Puis-je retirer mon investissement avant terme ?</p>
              <p className="text-gray-500 text-sm">Une pénalité de 3% est appliquée pour tout retrait avant la fin du cycle choisi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Invest;