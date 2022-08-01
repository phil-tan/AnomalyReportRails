import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from './EditForm';


const EditButton = ({button_name, button_class, building, chart, site_points_list, new_or_edit, AddChart}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if(new_or_edit === 'New'){
    let new_chart = {}
    new_chart.row = 1
    new_chart.title = "New Chart"
    new_chart.position = 100
    new_chart.parent_id = building.id
    new_chart.parent_type = 'building'
    chart = new_chart
  }

  return (
    <>
      <button className={button_class} onClick={handleShow}>
        {button_name}
      </button>
      <Modal className='chart-edit' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${new_or_edit} Building`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm chart={chart} building={building} site_points_list={site_points_list} new_or_edit={new_or_edit} AddChart={AddChart}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditButton
