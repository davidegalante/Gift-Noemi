import React, { useState, useRef, useEffect } from 'react';
import { components } from './components/Icons';
import { LockScreen } from './components/LockScreen';
import { songList } from './music';

// --- Tipi e Interfacce ---
interface Song {
  src: string;
}

interface SongMetadata {
  title: string;
  artist: string;
  cover: string; // URL o Data URL della copertina
}

// --- Componente Modale per la Lettera ---
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LetterModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-[#fef6e4] p-8 sm:p-12 rounded-lg shadow-2xl max-w-2xl w-full relative transform animate-fade-in max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" aria-label="Close letter">
          <components.CloseIcon className="w-8 h-8" />
        </button>
        <div className="text-gray-700 space-y-4 font-handwriting">
           <p className="text-2xl sm:text-3xl">My Dearest,</p>
           <p className="text-xl sm:text-2xl leading-relaxed sm:leading-loose">
               If you're reading this, it means you've found my little secret. I wanted to create something that felt like a warm hug on a cold day, a tangible representation of how much you mean to me. You are my sunshine, my favorite song, and the best part of my day. Thank you for being you. Thank you for choosing me. I love you more than words can say.
           </p>
           <p className="text-right mt-6 text-2xl sm:text-3xl">Forever and always,</p>
           <p className="text-right text-2xl sm:text-3xl">Your BF</p>
        </div>
      </div>
    </div>
  );
};

// --- Componente Modale per il Biglietto ---
const TicketModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-[#fef6e4] rounded-2xl shadow-2xl w-full max-w-sm transform animate-fade-in flex overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-1/3 bg-[#f5eadd] p-4 flex flex-col items-center justify-between border-r-2 border-dashed border-[#d3c0a9]">
           <div className="text-center">
              <p className="font-bold text-[#b59f84] text-xs transform -rotate-90 whitespace-nowrap origin-center mt-12">ADMIT ONE</p>
           </div>
           <div className="text-[#b59f84]">
             <components.HeartIcon className="w-8 h-8"/>
           </div>
           <div className="text-center">
              <p className="font-bold text-[#b59f84] text-xs transform -rotate-90 whitespace-nowrap origin-center mb-12">No. 1023</p>
           </div>
        </div>
        <div className="w-2/3 p-6 text-gray-700 flex flex-col justify-between">
          <div>
            <h3 className="font-handwriting text-3xl text-brand-pink-500">A Perfect Day</h3>
            <p className="text-xs text-gray-500 mb-4">Official Invitation</p>
            <div className="space-y-2 text-sm">
              <p><strong className="text-[#b59f84]">Date:</strong> Any Day You Choose</p>
              <p><strong className="text-[#b59f84]">Time:</strong> Sunrise to Sunset</p>
              <p><strong className="text-[#b59f84]">Venue:</strong> Wherever We're Together</p>
            </div>
          </div>
          <div className="mt-4">
             <p className="text-xs text-gray-600 leading-tight">Includes: cuddling, movie marathons, endless snacks, and non-stop laughter. </p>
             <p className="text-xs text-[#b59f84] mt-2">Price: One (1) Hug</p>
          </div>
        </div>
      </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white" aria-label="Close ticket">
          <components.CloseIcon className="w-8 h-8" />
        </button>
    </div>
  );
};

// --- Animazione del Cuore Disegnato ---
const HeartPainter: React.FC<{ onComplete: () => void; position: { x: number; y: number } }> = ({ onComplete, position }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
  const pathLength = 200;

  return (
    <div 
      className="fixed z-[100] pointer-events-none"
      style={{
        top: 0,
        left: 0,
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    >
      <svg 
        viewBox="0 0 24 24" 
        className="w-64 h-64 drop-shadow-lg"
        style={{ animation: 'fade-out-slowly 1s 2s forwards' }}
      >
        <path
          d={heartPath}
          fill="none"
          stroke="#ef4444"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          style={{ animation: 'draw-heart 2s ease-out forwards' }}
        />
      </svg>
    </div>
  );
};

// --- Componente Principale dell'Applicazione ---
const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isTicketOpen, setIsTicketOpen] = useState(false);
  const [isPainting, setIsPainting] = useState(false);
  const [paintPosition, setPaintPosition] = useState<{ x: number; y: number } | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentMetadata, setCurrentMetadata] = useState<SongMetadata>({
    title: 'Loading...',
    artist: '...',
    cover: 'https://picsum.photos/100/100?random=2' // Default cover
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Funzione per leggere i metadati da un file MP3
  const getSongMetadata = (songSrc: string) => {
    return new Promise<SongMetadata>((resolve) => {
      (window as any).jsmediatags.read(songSrc, {
        onSuccess: (tag: any) => {
          const tags = tag.tags;
          const title = tags.title || 'Unknown Title';
          const artist = tags.artist || 'Unknown Artist';
          let cover = 'https://picsum.photos/100/100?random=2'; // Fallback

          if (tags.picture) {
            const { data, format } = tags.picture;
            let base64String = "";
            for (let i = 0; i < data.length; i++) {
              base64String += String.fromCharCode(data[i]);
            }
            cover = `data:${format};base64,${window.btoa(base64String)}`;
          }
          
          resolve({ title, artist, cover });
        },
        onError: (error: any) => {
          console.error(`Error reading metadata for ${songSrc}:`, error);
          resolve({ 
              title: songSrc.split('/').pop()?.replace('.mp3', '') || 'Unknown Title', 
              artist: 'Unknown Artist', 
              cover: 'https://picsum.photos/100/100?random=2' 
          });
        }
      });
    });
  };

  // Carica i metadati della canzone corrente quando l'indice cambia
  useEffect(() => {
    const loadMetadata = async () => {
        if (songList.length > 0) {
            const metadata = await getSongMetadata(songList[currentSongIndex].src);
            setCurrentMetadata(metadata);
        }
    };
    loadMetadata();
  }, [currentSongIndex]);


  const handleUnlock = () => {
    setIsUnlocked(true);
  };
  
  // Avvio automatico della musica dopo lo sblocco
  useEffect(() => {
    if (isUnlocked && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => console.error("Autoplay failed:", error));
      }
    }
  }, [isUnlocked]);
  

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback error:", e));
    }
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songList.length);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songList.length) % songList.length);
  };
  
  // Riproduce la nuova canzone quando l'indice cambia
   useEffect(() => {
    if (audioRef.current && isPlaying) {
      // Aspetta che i metadati siano caricati, poi riproduci
      audioRef.current.load(); // Ricarica la sorgente audio
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Failed to play next song automatically:", error);
          setIsPlaying(false); // Metti in pausa se l'autoplay fallisce
        });
      }
    }
  }, [currentSongIndex]);


  const openLetter = () => setIsLetterOpen(true);
  const closeLetter = () => setIsLetterOpen(false);
  const openTicket = () => setIsTicketOpen(true);
  const closeTicket = () => setIsTicketOpen(false);

  const handlePaintClick = () => {
    if (isPainting) return;
    setPaintPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    setIsPainting(true);
  };

  if (!isUnlocked) {
    return <LockScreen onUnlock={handleUnlock} />;
  }

  return (
    <div className="bg-brand-pink-50 min-h-screen text-gray-700 animate-fade-in">
      {isPainting && paintPosition && <HeartPainter position={paintPosition} onComplete={() => { setIsPainting(false); setPaintPosition(null); }} />}
      
      <audio 
        ref={audioRef} 
        src={songList.length > 0 ? songList[currentSongIndex].src : ''}
        key={songList.length > 0 ? songList[currentSongIndex].src : ''}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleNextSong} // Va alla canzone successiva quando finisce
        preload="auto"
      />
      
      <main className="relative max-w-5xl mx-auto p-4 sm:p-8 md:p-12 h-[130vh] sm:h-[110vh] md:h-[100vh]">
        
        <div className="absolute top-[5%] left-[5%] text-brand-pink-200 opacity-60">
            <components.HeartIcon className="w-10 h-10 sm:w-12 sm:h-12 rotate-[-15deg]"/>
        </div>
        <div className="absolute top-[20%] right-[10%] text-brand-pink-200 opacity-60">
            <components.StarIcon className="w-6 h-6 sm:w-8 sm:h-8"/>
        </div>
        <div className="absolute bottom-[10%] left-[15%] text-brand-pink-200 opacity-60">
            <components.SparkleIcon className="w-8 h-8 sm:w-10 sm:h-10 rotate-12"/>
        </div>

        <div className="absolute top-[2%] sm:top-[5%] left-1/2 -translate-x-1/2 w-72 sm:w-80 bg-white p-4 rounded-lg shadow-lg rotate-[-2deg] z-10">
          <h2 className="font-bold text-center text-brand-pink-500">♡ NOTICE ♡</h2>
          <p className="text-sm mt-2"><b>To:</b> the most beautiful GF</p>
          <p className="text-sm"><b>From:</b> your loving BF</p>
        </div>

        <a href="#section-start" className="absolute top-[18%] sm:top-[20%] left-1/2 -translate-x-1/2 bg-gray-100 px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105 z-10 text-sm">
          01 — Start here!
        </a>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[300px] sm:w-[320px] sm:h-[400px] bg-white p-3 rounded-lg shadow-2xl rotate-2 transform hover:scale-105 transition-transform duration-300 z-20">
          <img src="https://i.imgur.com/AOQzuBM.jpeg" alt="Foto di due pinguini che si guardano in Antartide" className="w-full h-full object-cover rounded-md"/>
           <div className="absolute -top-4 -left-4 text-brand-pink-300 z-30">
              <components.HeartIcon className="w-8 h-8"/>
           </div>
            <div className="absolute -bottom-3 -right-3 text-brand-pink-300 z-30">
              <components.HeartIcon className="w-10 h-10 rotate-12"/>
           </div>
        </div>

        <div className="absolute top-[10%] sm:top-[12%] left-[10%] sm:left-[20%] w-16 h-16 rotate-[-25deg] z-20">
          <components.BinderClipIcon className="text-pink-300 drop-shadow-md"/>
        </div>

        <div className="absolute top-[38%] sm:top-[40%] left-[2%] sm:left-[5%] bg-transparent p-2 w-40 sm:w-56 rotate-[-5deg] z-10">
          <p className="leading-relaxed font-handwriting text-xl sm:text-2xl">
            <span className="bg-brand-pink-200 px-1">"I will always come looking for you, Angel, and I would burn the whole world down to find you."</span>
          </p>
        </div>

        <button
          onClick={handlePaintClick}
          className="absolute top-[25%] left-[8%] sm:left-[10%] z-20 w-20 h-20 sm:w-24 sm:h-24 rotate-[15deg] transform transition-all duration-300 hover:scale-110 hover:rotate-[5deg] focus:outline-none group cursor-pointer"
          aria-label="Draw a heart"
          disabled={isPainting}
        >
          <components.PaintBrushIcon className="w-full h-full drop-shadow-lg" />
        </button>

         <button onClick={openTicket} className="absolute top-[58%] sm:top-[65%] left-[5%] sm:left-[10%] bg-[#f5eadd] p-3 rounded-lg shadow-md rotate-[8deg] z-10 w-40 transform hover:rotate-6 transition-transform focus:outline-none focus:ring-2 focus:ring-brand-pink-400">
            <div className="border-2 border-dashed border-[#d3c0a9] p-2 text-center">
                <p className="font-bold text-[#b59f84] text-xs">TICKET TO</p>
                <p className="text-2xl font-handwriting text-[#b59f84]">Happiness</p>
            </div>
        </button>
        
        <button onClick={openLetter} className="absolute bottom-[2%] sm:bottom-[5%] left-[5%] sm:left-[8%] w-32 h-32 rotate-[-10deg] transform hover:scale-110 transition-transform z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-pink-400 rounded-full" aria-label="Open letter">
            <components.EnvelopeIcon />
        </button>

        <button onClick={openLetter} className="absolute top-1/2 left-1/2 -translate-x-1/2 transform translate-y-[170px] sm:translate-y-[230px] bg-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-transform hover:scale-105 z-30 text-sm flex items-center gap-2 cursor-pointer">
            <components.BookIcon className="w-4 h-4" /> Read me ♡
        </button>
        
        <div className="absolute top-[12%] sm:top-[15%] right-[10%] sm:right-[15%] w-16 h-16 rotate-12 z-20">
            <components.WaxSealIcon className="text-brand-pink-400 drop-shadow-lg" />
        </div>

        <div className="absolute top-[28%] sm:top-[30%] right-[2%] sm:right-[5%] bg-[#fef6e4] p-4 rounded-lg shadow-lg w-44 sm:w-56 rotate-6 transform transition-transform hover:rotate-3 z-10">
            <p className="font-handwriting text-xl sm:text-2xl leading-tight text-gray-600">
                Lights will guide you home, and ignite your bones, and I will try to fix you.
            </p>
             <div className="flex justify-end mt-2 text-brand-pink-300">
                <components.StarIcon className="w-4 h-4"/>
                <components.StarIcon className="w-3 h-3 ml-1"/>
                <components.StarIcon className="w-4 h-4 ml-1"/>
             </div>
        </div>

        <div className="absolute top-[55%] sm:top-[60%] right-[8%] sm:right-[12%] w-24 h-24 rotate-[-3deg] z-10">
            <components.CandleIcon />
        </div>

        <div className="absolute bottom-[2%] sm:bottom-[5%] right-1/2 translate-x-1/2 sm:right-[5%] sm:translate-x-0 rotate-3 z-30">
            <div className="mb-2 text-center">
                <p className="font-handwriting text-xl inline-block px-2 bg-brand-pink-200">songs that remind me of you</p>
            </div>
            <div className="bg-red-300/80 backdrop-blur-sm text-white p-3 rounded-xl shadow-lg w-64 sm:w-72">
                <div className="flex items-center gap-3">
                    <img src={currentMetadata.cover} alt="Album art" className="w-14 h-14 rounded-md shadow-md object-cover"/>
                    <div>
                        <p className="font-bold text-sm truncate">{currentMetadata.title}</p>
                        <p className="text-xs opacity-80">{currentMetadata.artist}</p>
                    </div>
                </div>
                <div className="flex items-center justify-around gap-2 mt-2">
                    <button onClick={handlePrevSong} aria-label="Previous song" className="p-1">
                        <components.MusicPrevIcon className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"/>
                    </button>
                    <button onClick={togglePlayPause} aria-label={isPlaying ? 'Pause music' : 'Play music'}>
                      {isPlaying 
                          ? <components.MusicPauseIcon className="w-8 h-8 opacity-90 hover:opacity-100"/>
                          : <components.MusicPlayIcon className="w-8 h-8 opacity-90 hover:opacity-100"/>
                      }
                    </button>
                    <button onClick={handleNextSong} aria-label="Next song" className="p-1">
                        <components.MusicNextIcon className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"/>
                    </button>
                </div>
            </div>
        </div>

        <a href="#section-love" className="absolute bottom-[1%] sm:bottom-0 left-1/2 -translate-x-1/2 bg-gray-100 px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105 z-10 text-sm">
          02 — Things I love about you ♡
        </a>
        
        <div className="absolute bottom-[-2%] right-[-10%] w-32 h-auto sm:w-40 sm:bottom-0 sm:right-0 opacity-70 z-0">
          <components.VinylIcon className="text-brand-pink-300" />
        </div>

      </main>

      <div className="space-y-24 px-4 sm:px-8 pb-24">
        <section id="section-start" className="max-w-3xl mx-auto pt-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-handwriting text-brand-pink-500 mb-4">Our Story Begins...</h2>
            <p className="text-base sm:text-lg leading-relaxed">
                This is a little corner of the internet I made just for you. A place to hold our memories, our dreams, and all the little things that make us, 'us'. Every piece here is a reminder of a moment, a feeling, a song that reminds me of you. Click around and explore our world.
            </p>
        </section>

        <section id="section-love" className="max-w-3xl mx-auto pt-20">
            <h2 className="text-3xl sm:text-4xl font-handwriting text-brand-pink-500 mb-6 text-center">Things I Love About You...</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base sm:text-lg">
                <li className="bg-white/50 p-4 rounded-lg shadow-md flex items-center gap-3">
                    <span className="text-brand-pink-400">♡</span> Your laugh when you think something is really funny.
                </li>
                <li className="bg-white/50 p-4 rounded-lg shadow-md flex items-center gap-3">
                    <span className="text-brand-pink-400">♡</span> The way you get excited about little things.
                </li>
                <li className="bg-white/50 p-4 rounded-lg shadow-md flex items-center gap-3">
                    <span className="text-brand-pink-400">♡</span> How you always know how to make me feel better.
                </li>
                <li className="bg-white/50 p-4 rounded-lg shadow-md flex items-center gap-3">
                    <span className="text-brand-pink-400">♡</span> Your kindness to everyone you meet.
                </li>
                <li className="bg-white/50 p-4 rounded-lg shadow-md flex items-center gap-3">
                    <span className="text-brand-pink-400">♡</span> That you're the smartest person I know.
                </li>
                <li className="bg-white/50 p-4 rounded-lg shadow-md flex items-center gap-3">
                    <span className="text-brand-pink-400">♡</span> ...and the list goes on forever.
                </li>
            </ul>
        </section>
      </div>
      
      <LetterModal isOpen={isLetterOpen} onClose={closeLetter} />
      <TicketModal isOpen={isTicketOpen} onClose={closeTicket} />
    </div>
  );
};

export default App;