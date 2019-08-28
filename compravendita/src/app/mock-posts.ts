import { Post } from './post';

export const Posts: Post[] = [
  { titolo:'Vendo maglietta',
    prezzo:5,
    descrizione:'è una maglietta brutta',
    nomeUtente:'Sara',
    cognomeUtente:'Villa',
    username:'sara.villa',
    data:'13:25, il 23/04/2019',
    numeroPost: 1,
    commenti:[
      {
        testo:'Ha ancora l\'etichetta?',
        cognomeUtente: 'Novembre',
        nomeUtente:'Mario',
        username:'marion',
        data: '21:50, il 24/04/2019'
      },
      {
        testo:'No :(',
        cognomeUtente: 'Villa',
        nomeUtente:'Sara',
        username:'sara.villa',
        data: '21:54, il 24/04/2019'
      }]
  },
  { titolo:'Bicicletta',
    prezzo:125,
    descrizione:'L\'ho vinta ad una fiera, non la voglio',
    nomeUtente:'Camilla',
    cognomeUtente:'Paglia',
    username:'cpaglia',
    data:'21:37, il 27/04/2019',
    numeroPost: 2,
    commenti:[
      { testo:'La prendo solo se è stata usata meno di 24 giorni e 22 ore',
        cognomeUtente: 'Novembre',
        nomeUtente:'Mario',
        username:'marion',
        data: '15:07, il 29/04/2019'
      }]
  },
  { titolo:'Regalo un tavolo',
    prezzo:55,
    descrizione:'è un tavolo',
    nomeUtente:'Mario',
    cognomeUtente:'Novembre',
    username:'marion',
    data:'01:25, il 05/05/2019',
    numeroPost: 3,
    commenti:[
      { testo:'Lo compro io',
        cognomeUtente: 'Paglia',
        nomeUtente:'Camilla',
        username:'cpaglia',
        data: '08:06, il 06/05/2019'
      },
      { testo:'No lo voglio io',
        cognomeUtente: 'Villa',
        nomeUtente:'Sara',
        username:'sara.villa',
        data: '08:10, il 06/05/2019'
      }]
  }
];
