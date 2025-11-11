import React, { useState, useEffect } from 'react';
import { components } from './Icons';

// Codice corretto per sbloccare. Il numero 1023 è visibile sul biglietto ("No. 1023").
const CORRECT_CODE = '1023';

// Interfaccia per le props del componente LockScreen.
interface LockScreenProps {
  onUnlock: () => void; // Funzione di callback da eseguire quando lo sblocco ha successo.
}

// Interfaccia per le props del componente Tumbler.
interface TumblerProps {
  digit: number; // La cifra attualmente visualizzata.
  onUp: () => void; // Callback per incrementare la cifra.
  onDown: () => void; // Callback per decrementare la cifra.
  disabled: boolean; // Flag per disabilitare i pulsanti (durante l'animazione di sblocco).
}

// Componente Tumbler: rappresenta una singola rotella numerica del lucchetto.
const Tumbler: React.FC<TumblerProps> = ({ digit, onUp, onDown, disabled }) => (
  <div className="flex flex-col items-center space-y-1">
    <button onClick={onUp} disabled={disabled} className="text-pink-200/70 hover:text-white disabled:opacity-50 transition-colors">
      <components.ChevronUpIcon className="w-5 h-5" />
    </button>
    <div className="w-12 h-16 bg-[#6b2c3a]/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white text-4xl font-mono shadow-inner">
      {digit}
    </div>
    <button onClick={onDown} disabled={disabled} className="text-pink-200/70 hover:text-white disabled:opacity-50 transition-colors">
      <components.ChevronDownIcon className="w-5 h-5" />
    </button>
  </div>
);

// Funzione per generare un codice casuale di 4 cifre all'avvio.
// Si assicura che il codice generato non sia uguale a quello corretto.
const generateRandomCode = (): number[] => {
    let code: number[];
    do {
      code = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
    } while (code.join('') === CORRECT_CODE);
    return code;
};

// Componente principale LockScreen.
export const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  // Stato per la combinazione corrente inserita dall'utente. Inizia con un codice casuale.
  const [combination, setCombination] = useState(generateRandomCode);
  // Stato per tracciare lo stato di sblocco (usato per l'animazione).
  const [isUnlocked, setIsUnlocked] = useState(false);

  // useEffect che controlla se la combinazione è corretta a ogni cambiamento.
  useEffect(() => {
    if (combination.join('') === CORRECT_CODE && !isUnlocked) {
      setIsUnlocked(true); // Attiva lo stato di sblocco
      // Aspetta 700ms (per l'animazione) prima di chiamare la funzione onUnlock del genitore.
      setTimeout(() => {
        onUnlock();
      }, 700);
    }
  }, [combination, onUnlock, isUnlocked]);
  
  // Gestisce il cambio di cifra su una rotella (su o giù).
  const handleDigitChange = (index: number, direction: 'up' | 'down') => {
    if (isUnlocked) return; // Non permette modifiche se è già sbloccato.
    const newCombination = [...combination];
    const currentDigit = newCombination[index];
    if (direction === 'up') {
      newCombination[index] = (currentDigit + 1) % 10; // Incrementa con overflow (9 -> 0)
    } else {
      newCombination[index] = (currentDigit - 1 + 10) % 10; // Decrementa con underflow (0 -> 9)
    }
    setCombination(newCombination);
  };


  return (
    // Contenitore principale con animazione di fade-out e zoom-in allo sblocco.
    <div className={`bg-gradient-to-br from-brand-pink-100 to-brand-pink-200 min-h-screen flex flex-col items-center justify-center p-4 transform transition-all duration-700 ease-in-out ${isUnlocked ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
      <div className="text-center mb-8">
        <h1 className="font-handwriting text-5xl text-brand-pink-500">A Secret Passage</h1>
        <p className="text-gray-500 mt-2">Only you hold the key...</p>
      </div>

      {/* --- Assemblaggio del lucchetto --- */}
      <div className="relative w-[240px] h-[290px] sm:w-[260px] sm:h-[315px]">
        {/* Arco del lucchetto con animazione di sblocco */}
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-36 h-20 border-[18px] border-b-0 border-gray-300 rounded-t-full origin-bottom transition-transform duration-700 ease-in-out
          ${isUnlocked ? 'translate-y-[-15px] -rotate-[30deg]' : ''}`}
        ></div>

        {/* Corpo del lucchetto */}
        <div className="absolute bottom-0 w-full h-[220px] sm:h-[240px] bg-gradient-to-br from-brand-pink-200 to-brand-pink-300 rounded-3xl shadow-xl p-4 sm:p-5 flex flex-col justify-between">
           {/* Cuori decorativi */}
           <div className="flex justify-between px-2 opacity-50">
             <components.HeartIcon className="w-4 h-4 text-brand-pink-500" />
             <components.HeartIcon className="w-4 h-4 text-brand-pink-500" />
           </div>

           {/* Rotelle numeriche */}
           <div className="flex justify-center items-center gap-1 sm:gap-2 bg-brand-pink-400/20 p-2 rounded-xl shadow-inner">
             {combination.map((digit, index) => (
                <Tumbler 
                    key={index} 
                    digit={digit} 
                    onUp={() => handleDigitChange(index, 'up')}
                    onDown={() => handleDigitChange(index, 'down')}
                    disabled={isUnlocked}
                />
             ))}
           </div>
          
           {/* Messaggio di benvenuto che appare allo sblocco */}
           <div className="h-6 text-center">
             {isUnlocked && (
               <p className="font-handwriting text-2xl text-white animate-fade-in">Welcome, my love!</p>
             )}
           </div>

        </div>
      </div>

      {/* Suggerimento per il codice */}
      <div className="mt-8 text-center">
        <p className="font-handwriting text-xl text-gray-600 inline-block px-2 bg-brand-pink-200/70 rounded">
          hint: look closely at the gift :)
        </p>
      </div>
    </div>
  );
};
