import Head from "next/head";
import PageTitle from "@display/page-title";
import Container from "@layout/container"; 
import SupportList from "@data/support.json";
import {
  SITE_TITLE,
  SITE_DESC,
  imgblurDataURL,
  BASE_PATH,
  HOME_OG_IMAGE_URL,
} from "@lib/constants";

export default function Support() {
  const siteTitle = `${SITE_TITLE} | SUPPORT`;
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
          <PageTitle>{SupportList.intro.title}</PageTitle>
          <div className="md:w-3/4 lg:w-3/4 mx-auto">
            <p className="text-center leading-relaxed text-slate-800">
              {SupportList.intro.text.map((item, index) => (
                <p
                  key={index}
                  className="text-center leading-relaxed text-slate-800"
                >
                  {item}
                </p>
              ))}
            </p>
          </div>
          <div className="my-16">
            <div>
              <h4 className="my-3 text-3xl font-semibold text-center">
                {SupportList.account.title}
              </h4>
              <ul className="text-center leading-relaxed text-slate-800 md:w-1/2 mx-auto">
                {SupportList.account.text.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> 
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
