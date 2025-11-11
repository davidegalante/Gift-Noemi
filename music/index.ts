// Questo file è l'indice della tua musica.
// Per aggiungere una canzone al lettore, segui questi passaggi:
// 1. Crea una cartella chiamata "music" nella radice del tuo progetto (accanto a index.html).
// 2. Metti i tuoi file .mp3 in quella cartella.
// 3. Aggiungi un oggetto a questa lista per ogni canzone, con il percorso corretto.

// Esempio:
// Se hai un file chiamato "my-song.mp3" nella cartella "music",
// la riga da aggiungere sarà: { src: '/music/my-song.mp3' }

interface Song {
  src: string;
}

export const songList: Song[] = [
  { src: '/music/lover.mp3' },
  { src: '/music/cardigan.mp3' },
  { src: '/music/the_1.mp3' },
  { src: '/music/exile.mp3' },
  // Aggiungi qui altre canzoni!
];
