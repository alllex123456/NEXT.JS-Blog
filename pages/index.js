import { Fragment } from 'react';
import Hero from '../components/home/Hero';
import FeaturedPosts from '../components/home/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
  return (
    <Fragment>
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
