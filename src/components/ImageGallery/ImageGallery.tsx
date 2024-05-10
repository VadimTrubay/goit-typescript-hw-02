import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryType {
  images: Array<{
    id: string;
    urls: {
      small: string;
      regular: string;
    };
  }>;
  onImageOpen: (id: string) => void;
}

const ImageGallery = ({images, onImageOpen}: ImageGalleryType) => {
  return (
    <div className={css.image_container}>
      <ul className={css.image_gallery}>
        {images.map(({id, urls}) => (
          <li key={id}>
            <ImageCard onImageOpen={onImageOpen} id={id} urls={urls}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
