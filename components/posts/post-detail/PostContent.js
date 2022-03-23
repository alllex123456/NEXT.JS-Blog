import classes from './PostContent.module.css';

import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './PostHeader';

const PostContent = (props) => {
  const { post } = props;

  const customRenderers = {
    paragraph(para) {
      if (para.node.children[0].type === 'image') {
        const image = para.node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{para.children}</p>;
    },

    code(code) {
      const { language, value } = code;
      return <Prism language={language} children={value} style={atomDark} />;
    },
  };

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
