import classes from './PostContent.module.css';

import ReactMarkdown from 'react-markdown';

import PostHeader from './PostHeader';

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
