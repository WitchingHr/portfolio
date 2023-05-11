import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// animation variants
const variants = {
  hidden: {
    opacity: 0,
    y: "150px",
    scale: 0.8,
  },
  // fade in a slide in from bottom
  visible: {
    opacity: 1,
    y: "0px",
    scale: 1,
  },
};

// types
type Blog = {
  _id: string;
  title: string;
  summary: string;
  text: string;
  createdAt: string;
};

// props
interface BlogListProps {
  blogs: Blog[];
}

// BlogList:
// list of blog posts
const BlogList: FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-4">
        {blogs.map((blog, i) => (
          <motion.li
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: (0.3 * (i + 1)) + 0.7, ease: "easeIn", type: "spring", damping: 11 }}
            key={blog._id}
            className="flex flex-col border border-gray-600 rounded-md bg-slate-900"
          >
            <Link href={`/blog/${blog._id}`}>
              <h2 className="p-2 px-4 text-2xl url">{blog.title}</h2>
            </Link>
            <div className="p-4 bg-slate-950 rounded-b-md">
              <p>{blog.summary}</p>
              <p className="text-right text-gray-600">Posted {blog.createdAt}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
