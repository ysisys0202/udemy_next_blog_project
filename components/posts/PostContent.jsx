import React from "react";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customComponents = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
              className="image"
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, children } = code;
      return (
        <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
