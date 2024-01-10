import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalPopup from './ModalPopup';
import ModalPopup2 from './ModalPopup2';

Modal.setAppElement('#root'); // 모달을 렌더링할 DOM 요소를 설정

const ModalPopMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const modalStyle = {
      overlay: {
        zIndex: 1000, // 모달 레이어의 z-index 값을 조절
      },
      content: {
        width: '80%', // 가로 크기를 화면의 90%로 설정
        height: '500px',
        maxWidth: '400px', // 최대 가로 크기를 400px로 제한
        left: 20,
      },
    };
  
    return (
        
      <div>
        <p> 임시 버튼 ↓↓↓</p>
        <button className={'btnHelped'} onClick={handleButtonClick}>Those who helped</button>
        
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="팝업"
          style={modalStyle}
          
        >
        <ModalPopup />

        <ModalPopup2 />

          <div>
            <button onClick={handleCloseModal}>닫기</button>
          </div>
        </Modal>
      </div>
    );
  };
  

export default ModalPopMain;