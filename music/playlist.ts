// Questo file definisce la playlist per il lettore musicale.
// Per aggiungere la tua musica:
// 1. Metti i tuoi file .mp3 nella cartella 'public'. Se non esiste, creala nella radice del tuo progetto.
// 2. Aggiungi il percorso del file all'array 'initialPlaylistPaths' qui sotto.
//    - Il percorso deve iniziare con una barra '/', ad esempio: '/nome-canzone.mp3'.
//
// L'applicazione leggerà automaticamente il titolo, l'artista e la copertina dal file MP3.
// Assicurati che i tuoi file MP3 abbiano i metadati (tag ID3) corretti!

export interface Song {
  src: string;
  title: string;
  artist: string;
  cover: string | null; // La copertina potrebbe non essere presente
}

// Aggiungi qui i percorsi ai tuoi file MP3
export const initialPlaylistPaths: string[] = [
    '/cardigan.mp3'
];
