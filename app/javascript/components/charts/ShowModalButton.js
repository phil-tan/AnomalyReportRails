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
      {/* <button > */}
        <img className='img-link' src="https://icon-library.com/images/open-icon-png/open-icon-png-15.jpg"
          style={{width: 25}} onClick={handleShow} cursor='pointer'
        />
      {/* </button> */}

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
