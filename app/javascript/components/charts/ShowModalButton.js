import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Chart from './Chart'

export default function ShowModalButton({chart, charts_data}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-sm btn-outline-primary' onClick={handleShow}>
        Open
      </button>

      <Modal className='chart-modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{chart.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Chart chart={chart} charts_data={charts_data} if_modal={true}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<ShowModalButton />);
