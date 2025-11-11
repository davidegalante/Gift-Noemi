// File che definisce e esporta tutti i componenti icona SVG utilizzati nell'applicazione.
import React from 'react';

// Tipo generico per le props delle icone, permette di passare classi CSS custom e altre props specifiche.
type IconProps = {
  className?: string;
  isUnlocked?: boolean; // Prop specifica per l'icona LockIcon per gestire l'animazione di sblocco.
};


// Icona del lucchetto. Cambia aspetto (si inclina) quando 'isUnlocked' è true.
const LockIcon: React.FC<IconProps> = ({ className, isUnlocked }) => (
  <svg viewBox="0 0 100 125" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        d="M50,5A29.5,29.5,0,0,0,20.5,34.5V45H30V34.5A20,20,0,0,1,70,34.5V45H79.5V34.5A29.5,29.5,0,0,0,50,5Z"
        fill="currentColor"
        className={`origin-center transition-transform duration-500 ease-in-out ${isUnlocked ? 'translate-x-[-12px] rotate-[-15deg]' : ''}`}
      />
      <rect x="10" y="40" width="80" height="60" rx="10" fill="currentColor"/>
      <circle cx="50" cy="70" r="10" fill="#fff" opacity="0.2"/>
      <path d="M50 62 L 50 78" stroke="#fff" strokeWidth="2" opacity="0.3"/>
    </g>
  </svg>
);

// Icona del cuore.
const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Icona della stella.
const StarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// Icona della graffetta (binder clip).
const BinderClipIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M106.6 60.18H21.4a5.35 5.35 0 0 0-5.35 5.35v34.87a5.35 5.35 0 0 0 5.35 5.35h85.2a5.35 5.35 0 0 0 5.35-5.35V65.53a5.35 5.35 0 0 0-5.35-5.35Z" fill="currentColor"/>
        <path d="M43.79 60.18s-1.5-38.37 19.57-38.37 20.21 38.37 20.21 38.37" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
    </svg>
);

// Icona della busta da lettere, con un cuore al centro.
const EnvelopeIcon: React.FC<IconProps> = ({ className }) => (
    <div className={`relative ${className}`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.5L12 15.5L22 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 18.5H22V5.5H2V18.5Z" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] text-brand-pink-400">
            <HeartIcon className="w-5 h-5"/>
        </div>
    </div>
);

// Icona del sigillo di cera con una 'B' incisa.
const WaxSealIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="currentColor"/>
      <path d="M 50,30 A 20,20 0 0,1 70,50 Q 70,65 50,75 Q 30,65 30,50 A 20,20 0 0,1 50,30 Z" fill="#fff" opacity="0.2"/>
      <text x="50" y="60" fontFamily="serif" fontSize="30" fill="#fff" textAnchor="middle" opacity="0.5">B</text>
    </svg>
);

// Icona della candela, composta da più elementi per creare l'effetto della fiamma.
const CandleIcon: React.FC<IconProps> = ({ className }) => (
    <div className={`relative ${className}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-yellow-300 rounded-full blur-[2px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-yellow-200/50 rounded-full blur-md"></div>
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-orange-400 rounded-full"></div>
        <div className="w-full h-24 bg-stone-100 rounded-t-lg shadow-inner"></div>
    </div>
);

// Icona di un disco in vinile.
const VinylIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" />
      <circle cx="50" cy="50" r="15" fill="#fdf2f8" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
      <circle cx="50" cy="50" r="40" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.2"/>
      <circle cx="50" cy="50" r="35" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.2"/>
      <circle cx="50" cy="50" r="30" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.2"/>
    </svg>
);

// Icona di una scintilla/stella a quattro punte.
const SparkleIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l2.35 7.16h7.65l-6.18 4.48 2.36 7.16-6.18-4.48-6.18 4.48 2.36-7.16-6.18-4.48h7.65z" />
  </svg>
);

// Icona di un libro.
const BookIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M3 3.5A1.5 1.5 0 014.5 2H12.5A1.5 1.5 0 0114 3.5v13A1.5 1.5 0 0112.5 18H4.5A1.5 1.5 0 013 16.5v-13z" />
    <path d="M15.5 2a1.5 1.5 0 011.5 1.5v13a1.5 1.5 0 01-1.5 1.5V2z" />
  </svg>
);

// Icona di chiusura (X).
const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Icone a freccia (chevron) per i selettori numerici.
const ChevronUpIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.03 9.77a.75.75 0 01-1.06-1.06l5.25-5.25a.75.75 0 011.06 0l5.25 5.25a.75.75 0 11-1.06 1.06L10.75 5.612V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
  </svg>
);

const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l4.22-4.158a.75.75 0 111.06 1.06l-5.25 5.25a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 111.06-1.06l4.22 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
  </svg>
);

// Icona del pennello.
const PaintBrushIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(-45 50 50)">
      {/* Manico */}
      <path d="M38 42 H 62 L 55 98 H 45 Z" fill="#ec4899"/>
      {/* Riflesso sul manico */}
      <path d="M42 42 L 58 42 L 52 96 H 48 Z" fill="#f472b6"/>
      {/* Ghiera metallica */}
      <path d="M28 32 H 72 L 70 42 H 30 Z" fill="#9ca3af"/>
      {/* Riflesso sulla ghiera */}
      <rect x="30" y="33" width="40" height="3" rx="1" fill="#e5e7eb"/>
      {/* Setole */}
      <path d="M50 35 C 30 20, 25 10, 30 0 L 70 0 C 75 10, 70 20, 50 35 Z" fill="#f59e0b"/>
      {/* Ombreggiatura sulle setole */}
      <path d="M50 35 C 45 28, 40 15, 42 5 L 58 5 C 60 15, 55 28, 50 35 Z" fill="#d97706" opacity="0.4"/>
    </g>
  </svg>
);

// --- Icone del Music Player ---
const MusicPlayIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const MusicPauseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const MusicPrevIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </svg>
);

const MusicNextIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 6h2v12h-2zm-4.5 6l-8.5 6V6z" />
  </svg>
);

const MusicAddIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v3h-2v-3h-3V5h3V2h2v3h3v2zm-7 11.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/>
    </svg>
);

const MusicNoteIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);


// Esporta un oggetto 'components' che raggruppa tutte le icone per un'importazione più pulita e organizzata.
export const components = {
    HeartIcon,
    StarIcon,
    BinderClipIcon,
    EnvelopeIcon,
    WaxSealIcon,
    CandleIcon,
    VinylIcon,
    SparkleIcon,
    BookIcon,
    CloseIcon,
    LockIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    PaintBrushIcon,
    MusicPlayIcon,
    MusicPauseIcon,
    MusicPrevIcon,
    MusicNextIcon,
    MusicAddIcon,
    MusicNoteIcon,
};