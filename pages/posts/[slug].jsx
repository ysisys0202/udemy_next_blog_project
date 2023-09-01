import React from "react";
import PostContent from "../../components/posts/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((postFileName) =>
    postFileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true, // false or "blocking"
  };
}
export function getStaticProps(context) {
  const slug = context.params.slug;
  console.log(context);
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
  };
}
export default PostDetailPage;
