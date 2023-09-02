import React from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util.js";
import Head from "next/head";
const HomePage = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Max' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <main>
        <Hero />
        <FeaturedPosts posts={posts} />
      </main>
    </>
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
