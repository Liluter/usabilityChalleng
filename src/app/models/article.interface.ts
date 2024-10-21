export interface ArticleElement {
  article?: Article,
  comments?: Comment[],
  content: string,
  createdAt?: string,
  data?: ArticleData,
  id?: string,
  imageUrl: string,
  title: string
}
export interface Comment {
  text: string;
  user: User;
}
export interface User {
  avatar: string;
  name: string;
}
export interface ArticleData {
  content: string;
  id?: string;
  imageUrl: string;
  title: string;
}
export interface Article {
  content: string;
  imageUrl: string;
  title: string;
}