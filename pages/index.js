import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/home/Hero';
import FeaturedPosts from '../components/home/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const posts = getFeaturedPosts();

  return {
    props: {
      featuredPosts: posts,
    },
  };
}

export default HomePage;
