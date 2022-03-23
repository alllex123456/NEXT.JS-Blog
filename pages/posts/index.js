import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = (props) => {
  return <AllPosts posts={props.allPosts} />;
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
