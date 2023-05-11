import React, { FC, useContext, useEffect } from "react";
import Header from "@/components/header/Header";
import HeadingInView from "@/components/sections/content/HeadingInView";
import BlogList from "@/components/blog/BlogList";
import dbConnect from "@/lib/dbConnect";
import Blog from "../models/Blog";
import { DateTime } from "luxon";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";

// TODO:
// - create blog list
// - create blog post card
// - verify token on mount

interface BlogPageProps {
  data: [];
}

// Blog:
const BlogPage: FC<BlogPageProps> = ({ data }) => {
  // auth context
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <Header page="blog" />
      <main>
        <section className="text-white section-container !pt-[88px] h-screen overflow-scroll flex flex-col">
          <HeadingInView>Blog</HeadingInView>

          <div className="flex flex-col items-center justify-between flex-1 w-full mt-8">
            <BlogList blogs={data} />
            <div className="ml-auto text-gray-600">
              {isAuth ? (
                <Link href="/blog/create">Create Blog Post</Link>
              ) : (
                <Link href="/login">Log in</Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;

// fetch blog posts
export const getServerSideProps = async () => {
  try {
    // connect to db
    await dbConnect();

    // get 5 most recent blog posts
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5).exec();

    // format blog post data
    const data = blogs.map((blog) => {
      // convert createdAt to DateTime object
      const dt = DateTime.fromJSDate(blog.createdAt);

      return {
        _id: JSON.parse(JSON.stringify(blog._id)),
        title: blog.title,
        summary: blog.summary,
        text: blog.text,
        createdAt: dt.toLocaleString(DateTime.DATETIME_MED),
      }
    });

    return {
      props: { data },
    };

  } catch (error) {
    console.error(error);
    return {};
  }
}