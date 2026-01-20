"use client";
import { blog_data, assets } from "@/Assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, use } from "react";

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [data, setData] = React.useState<(typeof blog_data)[0] | null>(null);
  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
        console.log(blog_data[i]);
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
            <Link href={"/"}>
          <Image
            src={assets.logo}
            width={150}
            alt="Logo"
            className="w-[130px]sm:w-auto"
          />
            </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started
            <Image src={assets.arrow} width={20} alt="Arrow Right" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-175 mx-auto">
            {data?.title}
          </h1>
          <Image
            src={data?.author_img}
            alt={data?.title}
            width={60}
            height={60}
            className="mt-6 mx-auto border borderwhite rounded-full "
          />

          <p className="mt pb-2 text-lg max-w-185 mx-auto">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-200 md:mx-auto -mt-25 mb-10">
        <Image
          src={data?.image}
          alt={data?.title}
          width={1280}
          height={720}
          className="mx-auto border-4 border-white "
        />
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Getting Started
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          assumenda porro maiores amet voluptatibus est inventore blanditiis.
          Facilis, accusamus impedit. Quisquam, officiis minima.
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          assumenda porro maiores amet voluptatibus est inventore blanditiis.
          Facilis, accusamus impedit. Quisquam, officiis minima.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Step 2: Next Steps</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          assumenda porro maiores amet voluptatibus est inventore blanditiis.
          Facilis, accusamus impedit. Quisquam, officiis minima.
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          assumenda porro maiores amet voluptatibus est inventore blanditiis.
          Facilis, accusamus impedit. Quisquam, officiis minima.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Step 3: Final Steps</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          assumenda porro maiores amet voluptatibus est inventore blanditiis.
          Facilis, accusamus impedit. Quisquam, officiis minima.
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          assumenda porro maiores amet voluptatibus est inventore blanditiis.
          Facilis, accusamus impedit. Quisquam, officiis minima.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          assumenda porro maiores amet voluptatibus est inventore blanditiis.
          Facilis, accusamus impedit. Quisquam, officiis minima.
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          assumenda porro maiores amet voluptatibus est inventore blanditiis.
          Facilis, accusamus impedit. Quisquam, officiis minima.
        </p>
        <div className="my-24">
            <p className="text-black font-semibold my-4 ">
                Share this article on social media!
            </p>
            <div className="flex">
                <Image src={assets.facebook_icon} alt="Facebook" width={50}  className="mr-4"/>
                <Image src={assets.twitter_icon} alt="Twitter" width={50}  className="mr-4"/>
                <Image src={assets.googleplus_icon} alt="Google Plus" width={50}  className="mr-4"/>
            </div>
        </div>
        
      </div>
      <Footer />
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default page;
