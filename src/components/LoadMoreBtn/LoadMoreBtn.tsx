import css from "./LoadMoreBtn.module.css";

interface LoadType {
  loadPhoto: () => void;
}

const LoadMoreBtn = ({loadPhoto}: LoadType) => {
  return (
    <div className={css.load_photo}>
      <button type="button" onClick={loadPhoto}>
        Load photo
      </button>
    </div>
  );
};

export default LoadMoreBtn;
