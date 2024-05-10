import css from "./ImageCard.module.css";

interface ImageCardType {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  onImageOpen: (id: string) => void;
}

const ImageCard = ({id, urls, onImageOpen}: ImageCardType) => {
  return (
    <>
      <img
        onClick={() => onImageOpen(id)}
        className={css.image_card}
        src={urls.small}
        alt="image"
      />
    </>
  );
};
export default ImageCard;
