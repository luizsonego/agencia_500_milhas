import Image from 'next/image'
import Modal from 'react-modal'
import { useState } from 'react';
import { useRouter } from 'next/router';
import ConnectionModal from './connectionModal';
import { StyledCard, StyledTitle, StyledSubTitle } from "../styles/cardStyles";

Modal.setAppElement('#__next')

const Card = ({
  title,
  description,
  content,
  ogImage,
  image,
  blur,
  backgroundColor
}) => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto',
      height: '70%',
      width: '75%',
      padding: 0
    },
  };

  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(!open)
  }
  function closeModal() {
    setOpen(!open)
  }


  return (
    <>
      <StyledCard
        backgroundColor={backgroundColor}
        blur={blur ?? blur}
        className="mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden w-full"
      >
        <a onClick={handleOpenModal}>
          <div className="sm:flex sm:items-center px-6 py-4" >
            <Image
              className="block h-16 sm:h-20 rounded-full mx-auto mx-auto sm:mb-0 sm:mr-2 sm:ml-0"
              src={image}
              width={85}
              height={85}
              alt={title}
            />
            <div className="text-center sm:text-left sm:flex-grow sm:ml-2">
              <div className="mx-auto">
                <StyledTitle>{title}</StyledTitle>
                <StyledSubTitle className="text-sm leading-tight text-grey-dark">
                  {description}
                </StyledSubTitle>
              </div>
            </div>
          </div>
        </a>
      </StyledCard>

      <Modal
        isOpen={open}
        onRequestClose={handleOpenModal}
        contentLabel={title}
        style={customStyles}
      >
        <button onClick={closeModal} style={{ position: 'absolute', zIndex: 9, margin: '20px', }}><i className="fas fa-arrow-circle-left fa-2x text-gray-100"></i></button>
        <ConnectionModal
          ogImage={ogImage}
          title={title}
          content={content}
        />
      </Modal>
    </>
  );
};

export default Card;
