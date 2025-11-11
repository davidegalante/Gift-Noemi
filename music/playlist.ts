// Questo file definisce la playlist predefinita per il lettore musicale.
// Per aggiungere la tua musica, segui questi passaggi:
// 1. Metti i tuoi file .mp3 e le immagini di copertina in una cartella accessibile pubblicamente (es. la cartella 'public' se stai usando un setup come Create React App).
// 2. Aggiorna l'array 'playlist' qui sotto con i dettagli delle tue canzoni.
//    - 'title': Il titolo della canzone.
//    - 'artist': Il nome dell'artista.
//    - 'cover': L'URL o il percorso dell'immagine di copertina.
//    - 'src': L'URL o il percorso del file musicale.
//
// Ho inserito dei segnaposto che funzionano online per farti vedere come funziona.
// Sostituiscili con i percorsi ai tuoi file!

export interface Song {
  title: string;
  artist: string;
  cover: string;
  src: string;
}

export const playlist: Song[] = [
  {
    title: "My Love",
    artist: "Amore",
    cover: 'https://i.imgur.com/v82rI96.jpeg',
    src: 'https://storage.googleapis.com/tfjs-voice-sst-model/tools/codelab/wave/204862_15_m_24_0.wav',
  },
  {
    title: "Our Song",
    artist: "Noi",
    cover: 'https://i.imgur.com/sIur3Ik.jpeg',
    src: 'https://storage.googleapis.com/tfjs-voice-sst-model/tools/codelab/wave/204862_15_m_24_1.wav',
  },
  {
    title: "Forever",
    artist: "Sempre",
    cover: 'https://i.imgur.com/lZ2j7ZJ.jpeg',
    src: 'https://storage.googleapis.com/tfjs-voice-sst-model/tools/codelab/wave/204862_15_m_24_2.wav',
  },
];
