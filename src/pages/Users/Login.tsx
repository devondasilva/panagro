import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Lock, Mail, ChevronRight} from 'lucide-react';

const Login: React.FC = () => {
  const [role, setRole] = useState<'stagiaire' | 'employe'>('stagiaire');
  const brandGreen = "#8DC63F";
  const forestDark = "#1A2F15";

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* --- CÔTÉ VISUEL (HIDDEN ON MOBILE) --- */}
      <div className="hidden md:flex md:w-1/2 bg-[#1A2F15] relative overflow-hidden items-center justify-center p-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8DC63F] blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8DC63F] blur-[120px] opacity-10"></div>
        
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-[#8DC63F] rounded-2xl flex items-center justify-center rotate-12">
              <Leaf color="white" size={28} />
            </div>
            <span className="text-3xl font-black tracking-tighter text-white">PANAGRO</span>
          </motion.div>
          
          <h2 className="text-5xl font-black text-white leading-tight tracking-tighter mb-6">
            L'espace de ceux qui <br /> 
            <span style={{ color: brandGreen }}>font grandir demain.</span>
          </h2>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Accédez à votre tableau de bord pour gérer vos missions, consulter vos plannings ou suivre vos formations agricoles.
          </p>
        </div>

        {/* Badge Info */}
        <div className="absolute bottom-10 left-10 flex items-center gap-4 text-white/40 border-l border-white/10 pl-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Portail Interne <br /> v2.0.26</p>
        </div>
      </div>

      {/* --- CÔTÉ FORMULAIRE --- */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-24 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-[#1A2F15] tracking-tighter mb-4">Content de vous revoir.</h1>
            <p className="text-gray-500 font-medium">Sélectionnez votre profil pour continuer.</p>
          </div>

          {/* SELECTEUR DE ROLE */}
          <div className="flex p-1 bg-gray-100 rounded-2xl mb-10">
            <button 
              onClick={() => setRole('stagiaire')}
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${role === 'stagiaire' ? 'bg-white text-[#1A2F15] shadow-sm' : 'text-gray-400'}`}
            >
              Stagiaire
            </button>
            <button 
              onClick={() => setRole('employe')}
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${role === 'employe' ? 'bg-white text-[#1A2F15] shadow-sm' : 'text-gray-400'}`}
            >
              Employé
            </button>
          </div>

          <form className="space-y-6">
            <div className="relative group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4 mb-2 block">Email Professionnel</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#8DC63F] transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="nom@panagro.com"
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-[#8DC63F] transition-all text-[#1A2F15] font-medium"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4 mb-2 block">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#8DC63F] transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-[#8DC63F] transition-all text-[#1A2F15] font-medium"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#8DC63F]" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Se souvenir</span>
              </label>
              <a href="#" className="text-xs font-bold text-[#8DC63F] hover:underline uppercase tracking-tighter">Oublié ?</a>
            </div>

            <button 
              type="submit"
              className="w-full py-5 rounded-2xl text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#8DC63F]/20"
              style={{ backgroundColor: role === 'stagiaire' ? brandGreen : forestDark }}
            >
              Se connecter au portail <ChevronRight size={18} />
            </button>
          </form>

          <p className="mt-12 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Problème d'accès ? <span className="text-[#1A2F15] cursor-pointer">Contactez l'admin IT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;