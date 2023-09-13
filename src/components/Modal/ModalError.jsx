import React from 'react'
import { Modal, Button } from "react-bootstrap"
import './BetaModall.css'

export default function ModalError({show, onHide}) {

  return (
    <Modal className='modal_error' show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Внимание!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Произошла ошибка</h4>
        <p>Пользователя с таким ником и почтой не существует, пожалуйста введите корректные данные.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}

//создать отдельный компонент и вынести туда ModalError


