import React from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR. ",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR. ",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR. ",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR. ",
    date: "2022-02-10",
  },
];
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </main>
  );
};

export default HomePage;
