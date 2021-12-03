import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post }) {
  return (
    <div
      className={classNames(
        "w-full",
        "px-10",
        "py-6",
        "bg-white",
        "rounded-lg",
        "shadow-md",
        "mt-6"
      )}
    >
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        height={420}
        width={600}
        className="mb-4 rounded"
      />

      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2l text-gray-700 font-bold hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Read More</a>
        </Link>
        <div className="flex items-center">
          <div className="mx-4 hidden sm:block">
            <Image
              src={post.frontmatter.author_image}
              alt=""
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-gray-700 font-bold">{post.frontmatter.author}</h3>
        </div>
      </div>
    </div>
  );
}
