import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LinePlotForm from './LinePlotForm';
import KpiForm from './KpiForm';
import KpiDiffForm from './KpiDiffForm';

const EditButton = ({button_name, button_class, plot_type, building, chart, site_points_list, AddChart}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let form;
  if(chart.plot_type==='line'){
    form =  <LinePlotForm chart={chart} building={building}
                  site_points_list={site_points_list} new_or_edit='Edit' AddChart={AddChart}/>
  }else if(chart.plot_type=='kpi'){
    form = <KpiForm chart={chart} building={building}
              site_points_list={site_points_list} new_or_edit='Edit' AddChart={AddChart}/>
  }
  else if(chart.plot_type=='kpi-diff'){
    form = <KpiDiffForm chart={chart} building={building}
              site_points_list={site_points_list} new_or_edit='Edit' AddChart={AddChart}/>
  }

  return (
    <>

        <img className='img-link'
          src="https://icon-library.com/images/pencil-edit-icon/pencil-edit-icon-5.jpg"
          style={{width: 25}} onClick={handleShow}
        />

      <Modal className='chart-edit' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Edit Chart`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {form}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditButton
