import React from 'react';
import { Button, Fade, Modal } from 'react-bootstrap';
import FlareIcon from '@material-ui/icons/Flare';
import './ClassCreatedModalStyle.scss';

type ClassCreatedModalProps = {
  onHide: any;
  show: any;
  classNumber: string;
  className: string;
};

const ClassCreatedModal = ({ onHide, show, classNumber, className }: ClassCreatedModalProps) => {
  return (
    <Modal
      onHide={onHide}
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      scrollable
      centered
      className="class-created-modal"
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <FlareIcon className="flare-icon" />
        <div className="class-header">Welcome to {classNumber}!</div>
        <p>{className}</p>
        <Button variant="primary" onClick={onHide}>
          Continue
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ClassCreatedModal;
