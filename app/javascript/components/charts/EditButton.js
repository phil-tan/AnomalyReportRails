import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from './EditForm';


const EditButton = ({button_name, chart, site_points_list, new_or_edit}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-sm btn-secondary open-chart-btn' onClick={handleShow}>
        {button_name}
      </button>
      <Modal className='chart-edit' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm chart={chart} site_points_list={site_points_list}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditButton
