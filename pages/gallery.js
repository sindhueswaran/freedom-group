import React, { useState } from "react";
import Head from "next/head";
import ImageMosaic from "@gallery/image-mosaic";
import ImageLightbox from "@gallery/image-lightbox";
import PageTitle from "@display/page-title";
import GalleryCollection from "@data/gallery.json";
import Container from "@layout/container";
import SectionTitle from "@display/section-title";
import {
  SITE_TITLE,
  SITE_DESC,
  imgblurDataURL,
  BASE_PATH,
  HOME_OG_IMAGE_URL,
} from "@lib/constants";

if (typeof window === "undefined") React.useLayoutEffect = () => {};

export default function Gallery({ galleryCollection }) {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const images = GalleryCollection;
  const siteTitle = `${SITE_TITLE} | GALLERY`;

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
          <PageTitle> Gallery </PageTitle>

          <section>
            <ImageMosaic
              images={images.map((image) => ({
                src: image.img,
                title: image.title,
                width: image.width,
                height: image.height,
              }))}
              handleClick={(e, { index }) => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />

            <ImageLightbox
              currentImageIndex={currentImageIndex}
              setCurrentIndex={setCurrentIndex}
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              images={images.map((image) => ({
                src: image.img,
                title: image.title,
              }))}
            />
          </section>
        </Container>
      </main>
    </>
  );
}
