import PostContent from '../../components/posts/post-detail/PostContent';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailsPage = (props) => {
  return <PostContent post={props.post} />;
};

export function getStaticPaths() {
  const files = getPostsFiles();
  const slugs = files.map((file) => file.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const post = getPostData(context.params.slug);

  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}

export default PostDetailsPage;
