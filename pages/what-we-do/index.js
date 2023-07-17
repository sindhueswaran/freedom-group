import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import PageTitle from "@display/page-title";
import { sortByWeight, filterDrafts } from "../../utils";
import WWDCard from "@display/wwd-card";
import Container from "@layout/container";
import WWDGrid from "@display/wwd-grid";
import {
  SITE_TITLE,
  SITE_DESC,
  imgblurDataURL,
  BASE_PATH,
  HOME_OG_IMAGE_URL,
} from "@lib/constants";

export default function Treatments({ posts }) { 
  const siteTitle = `${SITE_TITLE} | WHAT WE DO`;
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
        <Container>
          <PageTitle> What We Do </PageTitle>
          <WWDGrid>
          {posts.map((post, index) => (
              <WWDCard key={index} post={post} />
            ))}
          </WWDGrid> 
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByWeight).filter((post) => !post.frontmatter.draft),
    },
  };
}
