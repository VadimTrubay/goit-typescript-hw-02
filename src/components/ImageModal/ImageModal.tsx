import customStyles from "../ImageModal/StylesModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ImageModalType {
  modalIsOpen: boolean;
  selectedImage: string;
  closeModal: () => void;
}

const ImageModal = ({modalIsOpen, selectedImage, closeModal}: ImageModalType) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div>
        <img src={selectedImage} alt="Image modal"/>
      </div>
    </Modal>
  );
};

export default ImageModal;
