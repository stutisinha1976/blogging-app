import { blog_data, assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogItemProps {
  title: string;
  description: string;
  image: any;
  category: string;
  id: string;
}

const BlogItem = ({
  title,
  description,
  image,
  category,
  id,
}: BlogItemProps) => {
  return (
    <div className="max-w-82.5 sm:max-w-75 bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
        <Link href={`/blogs/${id}`}>
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="border-b border-black "
      />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm ">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center ">
          Read more{" "}
          <Image
            src={assets.arrow}
            alt="Arrow Right"
            width={12}
            height={12}
            className="inline-block ml-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
