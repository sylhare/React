export type PostData = { id: number, title: string, content: string }
export const NotFoundPost: PostData = { id: 0, title: 'Not found', content: ''}

export const getPosts: () => Promise<PostData[]> = async () => ([
  { id: 1, title: 'uno', content: 'post number 1' },
  { id: 2, title: 'dos', content: 'post number 2' },
])

export const getPost: (title: string) => Promise<PostData> = async (title) => {
  const posts = await getPosts();
  return posts.find(post => post.title === title) || NotFoundPost;
}
