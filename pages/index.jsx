import React from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util.js";

const HomePage = ({ posts }) => {
  console.log(posts);
  return (
    <main>
      <Hero />
      <FeaturedPosts posts={posts} />
    </main>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default HomePage;
