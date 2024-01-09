import React, { useState } from 'react';
import Modal from 'react-modal';
import hanmi from './img/hanmi.gif';

const ModalPopup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputNumber, setInputNumber] = useState('');

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const handleButtonClick = () => {
      // 버튼을 클릭했을 때 특정 번호를 확인하고 모달을 열거나 열지 않습니다.
      if (inputNumber === '2222') {
        openModal();
      }
    };
    
  
    const modalStyle = {
      content: {
        width: '55%', // 가로 크기를 화면의 90%로 설정
        height: '500px',
        maxWidth: '400px', // 최대 가로 크기를 400px로 제한
        top:"auto",
        bottom: "20%",
        left: 10,
      },
    };

    const handleInputChange = (event) => {
      // 입력창의 값이 변경될 때마다 상태를 업데이트합니다.
      setInputNumber(event.target.value);
    };

    return (
      <div>

        {/* 특정 번호를 입력하는 창 */}

        <label>
          입력 : &nbsp;
          <input
            type="text"
            value={inputNumber}
            onChange={handleInputChange}
            style={{width: "40px"}}
          />
          &nbsp;&nbsp;
        </label>

        <button onClick={handleButtonClick}>이한미는 봐라</button>
        
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="팝업"
          style={modalStyle}
        >
          <img src={hanmi} style={{ width: '90%', height: '60%', padding: '10px'}} />

          <div>
            <p>히치히치야야야</p>
            <p>뚱뚱뚱뚱치</p>
            <button onClick={handleCloseModal}>닫기</button>
          </div>
        </Modal>
      </div>
    );
  };
  

export default ModalPopup;