import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ButtonRound from "@ui/button-round";
import Button from "@ui/button";
import { Icon } from "@iconify/react"; 
import {
  SITE_TITLE,
  SITE_DESC,
  imgblurDataURL,
  BASE_PATH,
  HOME_OG_IMAGE_URL,
} from "@lib/constants";

const components = {
  a: Button,
  br: (props) => <br {...props} className="leading-normal mb-10" />,
  h1: (props) => <h1 {...props} className="text-xl font-light" />,
  ul: (props) => <ul {...props} className="list-disc list-inside" />,
  ol: (props) => <ol {...props} className="list-decimal list-inside" />,
  // TwoUp: dynamic(() => import("../../components/display/two-up")),
  // BeforeAfter: dynamic(() => import("../../components/display/before-after")),
};

export default function PostPage({ source, frontMatter }) {
  const siteTitle = `${SITE_TITLE} | ${frontMatter.title}`;
  return (
    <>
      <Head>
        <title> {siteTitle} </title>
        <meta name="description" content={SITE_DESC} />
        <link rel="canonical" href={BASE_PATH} />
        <meta name="robots" content="index" />
        <link rel="shortcut icon" href={HOME_OG_IMAGE_URL} />
      </Head>

      <main>
        <div className="mx-auto max-w-7xl min-h-screen mt-48 mb-12 px-2 sm:px-6 lg:px-8">
          <div className="text-end mt-20">
            {/* <ButtonRound>
              <Link href="/what-we-do">
                <Icon icon="ph:arrow-circle-left" className="w-10 h-10" />
              </Link>
            </ButtonRound> */}
          </div>
          <h2 className=" text-scblue text-4xl text-center font-extrabold mt-64 mb-12">
            {frontMatter.title}
          </h2>
          <div>
            <Image
              className="float-left mr-8 mb-5 rounded-lg"
              src={frontMatter.img}
              alt=""
              width={360}
              height={240}
            />

            {/* <h4 className="mb-2 font-semibold">{frontMatter.subtitle}</h4> */}
            <MDXRemote {...source} components={components} />
          </div>
          
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { content, data } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
