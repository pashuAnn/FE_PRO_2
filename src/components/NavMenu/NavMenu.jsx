import React, { useState } from 'react';
import ModalBeta from '../Modal/ModalBeta';
import EditProfile from '../EditProfile/EditProfile';
import { choiseButtons } from '../../utils';
import './navMenu.css';

export default function NavMenu({ data, choiseMenu, setMenu }) {
  const [isBetaModalVisible, setIsBetaModalVisible] = useState(false);
  const [formData, setFormData] = useState()

  function handleShoppingBasketClick(text) {
    setIsBetaModalVisible(true);
  }
  
   function handleEditProfileClick() {
     setFormData(true)
  }

  return (
    <div className="menuWrap">
      <button className="closeBtn" onClick={() => setMenu(1)}>
        x
      </button>
      <h1>Welcome!</h1>
      <div className="messageWrap">
        <p>User</p>
        <h3>{data[0].name}</h3>
      </div>
      <div className="choiseWrap">
        {choiseButtons.map((el, ind) => (
          <ChoiseButton
            key={`${el}-${ind}`}
            text={el}
            onClick={
              el === ' Shopping basket '
                ? handleShoppingBasketClick
                : el === ' Edit Profile '
                ? handleEditProfileClick
                : () => choiseMenu(ind + 3)
            }
          />
        ))}
      </div>
      {isBetaModalVisible && <ModalBeta show={isBetaModalVisible} />}
      {formData && <EditProfile show={formData}/>}
    </div>
  );
}

function ChoiseButton({ text, onClick }) {
  return (
    <button className="choiseNextStepBtn" onClick={onClick}>
      {text}
    </button>
  );
}




