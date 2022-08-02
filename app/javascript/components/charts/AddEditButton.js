import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LinePlotForm from './LinePlotForm';
import KpiForm from './KpiForm';

const AddEditButton = ({button_name, button_class, plot_type, building, chart, site_points_list, new_or_edit, AddChart}) => {
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
    new_chart.plot_type = plot_type
    new_chart.plot_options = ''
    chart = new_chart
  }

  let form;
  if(chart.plot_type==='line'){
    form =  <LinePlotForm chart={chart} building={building}
                  site_points_list={site_points_list} new_or_edit={new_or_edit} AddChart={AddChart}/>
  }else if(chart.plot_type=='kpi'){
    form = <KpiForm chart={chart} building={building}
              site_points_list={site_points_list} new_or_edit={new_or_edit} AddChart={AddChart}/>
  }

  return (
    <>
    <div style={{width:'100%'}} onClick={handleShow}>
      <span className={button_class}>
        {button_name}
      </span>
    </div>
      <Modal className='chart-edit' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${new_or_edit} Chart`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {form}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddEditButton
