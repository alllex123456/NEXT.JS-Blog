import classes from './PostContent.module.css';

import ReactMarkdown from 'react-markdown';

import PostHeader from './PostHeader';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs3',
  title: 'Getting started with Next JS',
  image: 'getting-started-nextjs.png',
  content: '# This is a first post',
  date: '2022-02-10',
};

const PostContent = (props) => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
