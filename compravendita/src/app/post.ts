import { Comment } from './comment';

export class Post
{
  titolo: string;
  prezzo: number;
  descrizione: string;
  nomeUtente: string;
  cognomeUtente: string;
  username: string;
  data: string;
  numeroPost: number;
  commenti: Comment[];
}
