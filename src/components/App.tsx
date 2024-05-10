import React, {useEffect, useState} from "react";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
import getImages from "./../services/imageSearchApi";

interface ImageType {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
}

const App: React.FC = () => {
  const [images, setImages] = useState<Array<ImageType> | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    async function loadImages() {
      try {
        setLoading(true);
        setError(false);
        const response = await getImages(query, page);
        const cleanData: Array<ImageType> = response.data.results;
        setImages((prevImages) => (prevImages ? [...prevImages, ...cleanData] : cleanData));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [query, page]);

  const onSearch = (queryText: string) => {
    setImages([]);
    setPage(1);
    setQuery(queryText);
  };

  const handleBtnClick = () => {
    setPage((page) => page + 1);
  };

  function onImageOpen(imageId: string) {
    setModalIsOpen(true);
    if (modalIsOpen) {
      return;
    }
    const selectedImage = images?.find((image) => image.id === imageId);
    setSelectedImage(selectedImage?.urls.regular || null);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <div>
      <SearchBar onSearch={onSearch}/>
      {loading && <Loader/>}
      {images && <ImageGallery images={images} onImageOpen={onImageOpen}/>}
      {images && <LoadMoreBtn loadPhoto={handleBtnClick}/>}
      {error && <ErrorMessage/>}
      {selectedImage && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
