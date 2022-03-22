import AllPosts from '../../components/posts/AllPosts';
const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with Next JS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with server-side rendering',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting started with Next JS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with server-side rendering',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting started with Next JS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with server-side rendering',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting started with Next JS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with server-side rendering',
    date: '2022-02-10',
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;