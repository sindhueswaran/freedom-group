import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Hero from "@display/hero";
import About from "@display/about";
import SliderCarousel from "@display/carousel";
import { sortByWeight } from "../utils";
import WWDCard from "@display/wwd-card";
import WWDGrid from "@display/wwd-grid";
import ContactInfo from "@display/contact-info";
import Form from "@display/form";
import SectionTitle from "@display/section-title";
import HeroListItems from "@data/hero.json";
import AboutInfo from "@data/about.json";
import WWDIntro from "@display/wwd-intro";
import Map from "@display/map";
import {
  SITE_TITLE,
  SITE_DESC,
  imgblurDataURL,
  BASE_PATH,
  HOME_OG_IMAGE_URL,
} from "../lib/constants";

export default function Home({ posts }) {
  const WWDList = posts.filter((post) => !post.frontmatter.draft);
  const siteTitle = `${SITE_TITLE} | HOME`;
  return (
    <>
      <Head> 
        <title> Freedom Group Rishikesh </title>
        <meta name="description" content={SITE_DESC} />
        <link rel="canonical" href={BASE_PATH} />
        <meta name="robots" content="index" />
        <link rel="shortcut icon" href={HOME_OG_IMAGE_URL} />
      </Head>

      <main>
        <SliderCarousel>
          {HeroListItems.map((item, index) => (
            <Hero key={index} item={item} />
          ))}
        </SliderCarousel>

        <section
          id="about-us"
          className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32"
        >
          {AboutInfo.map((about, index) => (
            <About key={index} about={about} />
          ))}
        </section>

        <section
          id="what-we-do"
          className="relative bg-fgprimarybg px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32"
        >
          <WWDIntro />
          <WWDGrid>
            {WWDList.map((post, index) => (
              <WWDCard key={index} post={post} />
            ))}
          </WWDGrid>
        </section>

        <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
          <SectionTitle>Contact</SectionTitle>
          <ContactInfo />
        </section>
        <section className="py-20 px-5 bg-fgprimarybg">
          <div className="my-20 mx-auto w-full md:w-3/4 lg:w-2/4">
            <Form />
          </div>
        </section>
        <section>
          <Map />
        </section>
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
