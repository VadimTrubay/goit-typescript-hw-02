import axios, {AxiosResponse, AxiosError} from "axios";

const API_KEY = "xSOm-Z_unIVqC8MgDg2y9mEie0lF4PPcCIwRyGMZNsw";

interface ImageDataType<T> {
  results: T[];
}

interface ImageType {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

const getImages = (query: string, page: number = 1): Promise<AxiosResponse<ImageDataType<ImageType>>> => {
  return axios.get<ImageDataType<ImageType>>(
    `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&page=${page}&orientation=landscape`
  );
};

export default getImages;
