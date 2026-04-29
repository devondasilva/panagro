import { useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { itemData } from '../data/poster';

import '../index.css';
import Nav from '../components/Nav';

export default function Project() {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState<{img: string, title: string} | null>(null);
  const brandColor = "#8DC63F";

  const handleOpen = (item: {img: string, title: string}) => {
    setActiveImg(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='min-h-screen bg-slate-50 font-sans'>
      <Nav />
      
      {/* --- HEADER SECTION --- */}
      <header className="bg-white border-b mt-20 border-slate-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-2xl">
                   
                    <h2 className="font-black text-5xl md:text-8xl text-[#1A2F15] tracking-tighter leading-none mb-6">
                        Latest <span style={{ color: brandColor }}>Work.</span>
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        A collection of visual experiences, brand identities, and digital interfaces 
                        crafted for impact and performance.
                    </p>
                </div>
                <div className="flex gap-4 mb-2">
                    <div className="text-right">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Total Projects</p>
                        <p className="text-4xl font-black text-[#1A2F15]">{itemData.length}</p>
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* --- MASONRY GALLERY SECTION --- */}
      <main className='max-w-7xl mx-auto px-4 py-16'>
        <Box sx={{ width: 'auto', minHeight: 800 }}>
          <Masonry 
            columns={{ xs: 1, sm: 2, md: 3 }} 
            spacing={3}
            sx={{ margin: 0 }} // Fixe les problèmes d'alignement
          >
            {itemData.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-[2rem] bg-white cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                onClick={() => handleOpen(item)}
              >
                {/* Image Container with scale effect */}
                <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Overlay on Hover (Modern approach) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F15]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span 
                            className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md text-white mb-3 inline-block"
                            style={{ backgroundColor: brandColor }}
                        >
                            Case Study
                        </span>
                        <h4 className="text-white text-2xl font-black tracking-tighter">{item.title}</h4>
                    </div>
                </div>
              </div>
            ))}
          </Masonry>
        </Box>
      </main>

      {/* --- MODAL (LIGHTBOX) --- */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backgroundColor: 'rgba(10, 20, 10, 0.95)', // Plus sombre pour le portfolio
              backdropFilter: 'blur(10px)'
            },
          },
        }}
      >
        <Fade in={open}>
          <Box 
            onClick={handleClose} // Ferme au clic sur le fond
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              outline: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              zIndex: 2000
            }}
          >
            {/* IconButton - Fermeture */}
            <IconButton 
              onClick={handleClose}
              sx={{ 
                position: 'fixed', 
                top: 20, 
                right: 20, 
                color: 'white',
                bgcolor: 'rgba(255,255,255,0.05)',
                '&:hover': { color: brandColor, bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              <CloseIcon sx={{ fontSize: 32 }} />
            </IconButton>

            {activeImg && (
              <Box 
                onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique sur l'image
                sx={{ 
                    position: 'relative',
                    maxWidth: '90vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
              >
                <img 
                    src={activeImg.img} 
                    alt={activeImg.title}
                    style={{ 
                        maxWidth: '100%', 
                        maxHeight: '75vh', 
                        objectFit: 'contain',
                        borderRadius: '24px',
                        boxShadow: '0 50px 100px rgba(0,0,0,0.8)'
                    }}
                />
                <div className="mt-8 text-center">
                    <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter">
                        {activeImg.title}
                    </h3>
                    <div className="w-16 h-1.5 mx-auto mt-4 rounded-full" style={{ backgroundColor: brandColor }}></div>
                </div>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* --- FOOTER CTA --- */}
      <footer className="bg-white py-16 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                © 2026 — Design Portfolio
              </p>
              <p className="text-slate-900 font-black text-sm uppercase tracking-tighter">
                Developed by D@S COMMUNICATION
              </p>
          </div>
          
          <div className="flex gap-8">
              {[
                  { name: 'Instagram', url: 'https://www.instagram.com/devondasilva5?igsh=MWNsd2FucjE2ZnJzbg%3D%3D&utm_source=qr' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/honore-da-silva-b02561194' },
                  { name: 'Facebook', url: 'https://www.facebook.com/devon.dasilva.37' }
              ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#8DC63F] transition-colors"
                  >
                    {social.name}
                  </a>
              ))}
          </div>
        </div>
      </footer>
    </div>
  );
}