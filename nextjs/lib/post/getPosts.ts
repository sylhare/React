export type PostData = {
  id: string;
  title: string;
  slug: string;
  content: string;
  date: string;
  excerpt: string;
};

export const NotFoundPost: PostData = {
  id: '0',
  title: 'Not found',
  slug: '',
  content: '',
  date: '',
  excerpt: '',
};

export const getPosts: () => Promise<PostData[]> = async () => ([
  {
    id: '1',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    content: 'Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.',
    date: '2023-10-27',
    excerpt: 'Learn the basics of Next.js and how to set up your first project.',
  },
  {
    id: '2',
    title: 'Understanding React Server Components',
    slug: 'understanding-react-server-components',
    content: 'React Server Components allow you to write UI that can be rendered and optionally cached on the server.',
    date: '2023-11-15',
    excerpt: 'Deep dive into the new paradigm of React Server Components.',
  },
  {
    id: '3',
    title: 'The Future of Web Development',
    slug: 'the-future-of-web-development',
    content: 'Web development is constantly evolving. From static sites to SPAs and now back to server-side rendering, what does the future hold correctly?',
    date: '2023-12-01',
    excerpt: 'A look at current trends and predictions for the future of web dev.',
  },
  {
    id: '4',
    title: 'Tailwind CSS Tips and Tricks',
    slug: 'tailwind-css-tips-and-tricks',
    content: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
    date: '2024-01-10',
    excerpt: 'Boost your productivity with these essential Tailwind CSS tips.',
  },
]);

export const getPost: (slug: string) => Promise<PostData> = async (slug) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) || NotFoundPost;
};
