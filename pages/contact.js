import Head from "next/head";
import Form from "../components/display/form";
import PageTitle from "@display/page-title";
import ContactInfo from "@display/contact-info";
import Container from "@layout/container";
import Map from "@display/map";
import {
  SITE_TITLE,
  SITE_DESC,
  imgblurDataURL,
  BASE_PATH,
  HOME_OG_IMAGE_URL,
} from "@lib/constants";

export default function Contact() {
  const siteTitle = `${SITE_TITLE} | CONTACT`;
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
          <PageTitle> Contact </PageTitle>
          <div className="mb-5">
            <ContactInfo />
          </div>
        </Container>
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
