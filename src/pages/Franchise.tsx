import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Droplets, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Sun,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const FranchiseBeninPage: React.FC = () => {

  const packContents = [
    { 
      title: "Autonomie Solaire", 
      desc: "Système de pompage solaire immergé et éclairage LED pour une exploitation 0 fuel.", 
      icon: <Sun className="text-orange-400" /> 
    },
    { 
      title: "Smart Irrigation", 
      desc: "Goutte-à-goutte automatisé par sondes pour préserver les nappes phréatiques.", 
      icon: <Droplets className="text-blue-400" /> 
    },
    { 
      title: "Label Panagro", 
      desc: "Accès prioritaire aux marchés premium de Cotonou (Erevan, Hôtels, Restaurants).", 
      icon: <ShieldCheck className="text-[#8DC63F]" /> 
    },
    { 
      title: "Formation 229", 
      desc: "Accompagnement de 3 mois sur les sols tropicaux et gestion de la main d'œuvre.", 
      icon: <BookOpen className="text-emerald-500" /> 
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF5] font-sans selection:bg-[#8DC63F]">
      <Nav />

      {/* --- HERO SECTION : L'OPPORTUNITÉ BÉNIN --- */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Opportunité Investissement Bénin</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-[#1A2F15] mb-8">
                L'AGRI-BUSINESS <br /> <span className="text-[#8DC63F]">SÉCURISÉ.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-xl mb-10 leading-relaxed">
                Investissez dans un modèle de ferme clé en main au Bénin. <span className="text-[#1A2F15] font-bold">Irrigation solaire, tech IoT</span> et débouchés garantis sur Cotonou.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-5 bg-[#1A2F15] text-white font-black rounded-2xl flex items-center gap-3 hover:bg-[#8DC63F] transition-all group">
                  Demander le Business Plan <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* --- CARTE STATS (DASHBOARD) --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-5 bg-[#1A2F15] rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8DC63F]/10 blur-[100px]"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-8 uppercase tracking-tighter flex items-center gap-2">
                    <TrendingUp size={20} className="text-[#8DC63F]" /> Projection / 1 Hectare
                  </h3>
                  <div className="space-y-8">
                      <StatItem label="Chiffre d'Affaires Estimé" value="12M - 18M FCFA" color="#8DC63F" sub="Par cycle annuel" />
                      <StatItem label="Investissement Total" value="10 000 000 FCFA" color="white" sub="Installation complète incluse" />
                      <StatItem label="Point Mort (ROI)" value="18 - 24 Mois" color="#8DC63F" sub="Modèle haute performance" />
                  </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- LE PACK "CLÉ EN MAIN" --- */}
      <section className="py-24 bg-white rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 mb-4">Le Modèle Opérationnel</h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#1A2F15] tracking-tighter">Votre kit de réussite.</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 italic text-sm text-gray-500">
              "Réduire les pertes post-récolte de 60% grâce à la tech."
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packContents.map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-[#F8FAF5] border border-gray-100 hover:border-[#8DC63F] transition-all group hover:shadow-xl hover:shadow-[#8DC63F]/5">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-[#1A2F15] mb-3 uppercase tracking-tighter">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION ÉCONOMIQUE : POURQUOI LE BÉNIN ? --- */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 bg-[#1A2F15] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
            {/* Décoration en arrière-plan */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 border border-[#8DC63F] rounded-full"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h3 className="text-4xl font-black mb-8 leading-none italic">POURQUOI MAINTENANT ?</h3>
                    <div className="space-y-6">
                      <BenefitRow title="Demande Croissante" desc="Les consommateurs de Cotonou recherchent des produits sains certifiés sans pesticides." />
                      <BenefitRow title="Indépendance Énergétique" desc="Nos fermes utilisent 100% d'énergie solaire pour contrer les coûts de l'électricité." />
                      <BenefitRow title="Sécurité de l'Eau" desc="Forage artésien et irrigation de précision pour cultiver 12 mois sur 12." />
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem]">
                    <h4 className="text-2xl font-black text-[#8DC63F] mb-6">Répartition Investissement</h4>
                    <ul className="space-y-4">
                        <li className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-gray-400">Forage & Solaire</span>
                          <span className="font-bold">4.5M FCFA</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-gray-400">Serres & IoT</span>
                          <span className="font-bold">2.5M FCFA</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-gray-400">Formation & Accompagnement</span>
                          <span className="font-bold">1.5M FCFA</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-gray-400">Droit d'entrée & Marque</span>
                          <span className="font-bold">1.5M FCFA</span>
                        </li>
                    </ul>
                    <div className="mt-8 pt-6 border-t-2 border-dashed border-[#8DC63F]/30 text-center">
                      <p className="text-sm uppercase tracking-widest text-gray-400">Total Clé en Main</p>
                      <p className="text-4xl font-black text-white">10M FCFA</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FORMULAIRE DÉDIÉ INVESTISSEUR --- */}
      <section id="candidature" className="py-24 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black tracking-tighter text-[#1A2F15] mb-4 uppercase">Parlons de votre projet</h2>
          <p className="text-gray-500">Ouverture de zones prioritaires : <span className="font-bold text-[#1A2F15]">Ouidah, Allada, Abomey-Calavi et Porto-Novo.</span></p>
        </div>
        
        <form className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase ml-2 text-gray-400">Nom complet</label>
                  <input type="text" placeholder="Ex: Jean Houndé" className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#8DC63F] outline-none font-bold transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase ml-2 text-gray-400">Zone de recherche</label>
                  <select className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#8DC63F] outline-none font-bold transition-all">
                    <option>Cotonou / Littoral</option>
                    <option>Atlantique</option>
                    <option>Ouémé</option>
                    <option>Zou / Collines</option>
                  </select>
                </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase ml-2 text-gray-400">Email professionnel</label>
              <input type="email" placeholder="votre@email.com" className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#8DC63F] outline-none font-bold transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase ml-2 text-gray-400">Capacité foncière disponible ?</label>
              <textarea placeholder="Ex: Je possède 2 hectares titrés à Allada..." rows={3} className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#8DC63F] outline-none font-bold transition-all"></textarea>
            </div>
            <button className="w-full py-5 bg-[#1A2F15] text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#8DC63F] hover:text-[#1A2F15] transition-all flex items-center justify-center gap-3">
                Lancer l'étude de faisabilité <ArrowRight size={18} />
            </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

// --- COMPOSANTS INTERNES ---

const StatItem = ({ label, value, color, sub }: { label: string, value: string, color: string, sub: string }) => (
    <div className="border-l-4 border-[#8DC63F]/30 pl-6">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{label}</p>
        <p className="text-3xl md:text-4xl font-black leading-none mb-1" style={{ color: color }}>{value}</p>
        <p className="text-[10px] text-gray-400 italic">{sub}</p>
    </div>
);

const BenefitRow = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-4 group">
    <div className="mt-1">
      <CheckCircle2 size={20} className="text-[#8DC63F]" />
    </div>
    <div>
      <h5 className="font-black text-white uppercase text-sm tracking-widest mb-1 group-hover:text-[#8DC63F] transition-colors">{title}</h5>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default FranchiseBeninPage;