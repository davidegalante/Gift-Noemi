// Questo file è l'indice della tua musica.
// La lista delle canzoni è ora gestita dinamicamente nell'applicazione.
// Puoi caricare i file MP3 direttamente dall'interfaccia utente.

interface Song {
  src: string;
}

export const songList: Song[] = [
  // La playlist è vuota di default e verrà popolata con i file caricati dall'utente.
];