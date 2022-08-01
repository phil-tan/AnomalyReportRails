import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Navigate } from "react-router-dom";

//For Sites!
const NewEditModal = ({site, button_name, button_class, new_or_edit}) => {

  // Handle Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Form Fields
  const [name, setName] = useState(site.name)
  const [short_name, setShortName] = useState(site.short_name)
  const [image, setImage] = useState(site.image)
  // const [access_list, setAccessList] = useState(site.access_list)

  const onSubmit = (e) => {
    e.preventDefault();
    let s = site
    s.name = name
    s.short_name = short_name
    s.image = image

    let req_method = 'POST'
    let req_url = 'http://localhost:3000/sites'
    if(new_or_edit === 'Edit'){
      req_method = 'PATCH'
      req_url = `http://localhost:3000/sites/${site.id}`
    }

    fetch(req_url, {
      method: req_method, // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(s),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
      setTimeout(() => {
        window.location.reload(false)
      }, 1000);
    })
    .catch((error) => {
      console.error('Error:', error)
      setTimeout(() => {
        window.location.reload(false)
      }, 1000);
    });
  }

  const onDeleteClick = (e) => {
    fetch(`http://localhost:3000/sites/${site.id}`, { method: 'DELETE' })
    .then(() => {
      console.log('site deleted');
      setTimeout(() => {
        window.location = `http://localhost:3000/sites`
      }, 1000);
    });
  }

  return (
    <>
      <a className={button_class} onClick={handleShow}>
        {button_name}
      </a>
      <Modal className='building-modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${new_or_edit} Site`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className='container'>
        <form onSubmit={onSubmit}>
        <div className='row'>
          <div className='form-group'>
            <label>Name</label><input className='form-control' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label>Short Name: e.g. site ID, abbrevation etc. </label><input className='form-control' type='text' value={short_name} onChange={(e)=>setShortName(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label>Image</label><input className='form-control' type='text' value={image} onChange={(e)=>setImage(e.target.value)}/>
          </div>
          </div>
          <hr></hr>
          <div className='text-end'>
            <input type='submit' value={new_or_edit==='Edit' ? 'Update' : 'Add'} className='btn btn-lg btn-primary' />
            {new_or_edit=='Edit' ? <a className='btn btn-lg btn-danger'
                      onClick={onDeleteClick}>Delete</a> : <></>}
          </div>
        </form>
      </div>
    </Modal.Body>
      </Modal>
  </>
)}

export default NewEditModal
