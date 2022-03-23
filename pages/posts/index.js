import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
      </Head>
      <AllPosts posts={props.allPosts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      allPosts: posts,
    },
  };
}

export default AllPostsPage;
