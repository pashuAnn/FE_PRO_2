import React, { useState } from 'react';
import ModalBeta from '../Modal/ModalBeta'; // Импортируйте ваше модальное окно
import { choiseButtons } from '../../utils';
import './navMenu.css';

export default function NavMenu({ data, choiseMenu, setMenu, onEditProfile }) {
  const [isBetaModalVisible, setIsBetaModalVisible] = useState(false);

  function handleShoppingBasketClick(text) {
    setIsBetaModalVisible(true);
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
                : () => choiseMenu(ind + 3)
            }
          />
        ))}
      </div>
      {isBetaModalVisible && <ModalBeta show={isBetaModalVisible} />}
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




