import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LinePlotForm from './LinePlotForm';
import KpiForm from './KpiForm';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const AddSelect = ({button_class, site, building, parent_type, site_points_list}) => {
  const [show, setShow] = useState(false);
  const [formType, setForm] = useState('line')
  // const [form, setForm] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let new_chart = {}
  new_chart.row = 1
  new_chart.title = "New Chart"
  new_chart.position = 100
  new_chart.parent_type = parent_type
  if(parent_type==='building'){
    new_chart.parent_id = building.id
  }else if(parent_type==='site'){
    new_chart.parent_id = site.id
  }
  new_chart.plot_options = ''

  const handleSelect = (e) => {
    console.log(e.eventKey)


    if(e==='Line'){
      console.log('entered Line Form')
      setForm('line')
    }else if(e==='Kpi'){
      console.log('entered Kpi Form')
      setForm('kpi')
    }

    setShow(true)
  }

  let form;
  if(formType==='line'){
    form =  <LinePlotForm chart={new_chart} building={building}
                  site_points_list={site_points_list} new_or_edit='New'/>
  }else if(formType==='kpi'){
    form = <KpiForm chart={new_chart} building={building}
              site_points_list={site_points_list} new_or_edit='New'/>
  }

  return (
    <>
    <DropdownButton id="dropdown-item-button" title="Add Chart" className={button_class} onSelect={handleSelect}>
        <Dropdown.Item eventKey="Line">Line</Dropdown.Item>
        <Dropdown.Item eventKey="Kpi">Kpi</Dropdown.Item>
    </DropdownButton>

    {/* <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
      </DropdownButton> */}

      <Modal className='chart-edit' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`New Chart`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {form}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddSelect
