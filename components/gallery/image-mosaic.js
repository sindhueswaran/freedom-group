import Gallery from "react-photo-gallery";
import GridImage from "./grid-image";

export default function ImageMosaic({ images, handleClick }) {
  return (
    <div className="overflow-y-auto">
      <Gallery
        columns={(containerWidth) => {
          let columns = 1;
          if (containerWidth >= 500) columns = 2;
          if (containerWidth >= 900) columns = 3;

          return columns;
        }}
        onClick={handleClick}
        photos={images}
        margin={5}
        direction="column"
        renderImage={GridImage}
      />
    </div>
  );
}
