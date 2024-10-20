export interface ArticleElement {
  article?: {
    content: string,
    imageUrl: string,
    title: string
  },
  comments?: [{ text: string, user: { avatar: string, name: string } }],
  content: string,
  createdAt?: string,
  data?: {
    content: string,
    id?: number,
    imageUrl: string,
    title: string
  },
  id?: string,
  imageUrl: string,
  title: string
}