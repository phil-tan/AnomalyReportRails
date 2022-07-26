import { update } from 'plotly.js';
import React from 'react'
import { useState } from 'react'
import { postObj, getObject } from './utils'

const UpdatePage = ({model}) => {

   let init_obj_dict = {}

   let title = ''
   //form title
   if(location.pathname.includes('create')) {
      title = `Add ${model}`
   } else {
      title = `Update ${model}`
      init_obj_dict = getObject(`${model}s`, params.id, useState([]))
      console.log(init_obj_dict)
   }

   const [obj, setObj] = useState(init_obj_dict)

   //update object on page function
   const setPageObj = (key, val) => {
      let obj_dict = obj
      obj_dict[key] = val
      setObj(obj_dict)
   }

   const onSubmit = (e, params) => {
      e.preventDefault()
      const id = postObj(obj, location.pathname)
      navigate(`/${model}s/${id}`)
   }

   const FormTextField = ({label, k}) => {
      return (
      <div className='form-group'>
      <label>{label}</label>
      <input
         className='form-control'
         name = "name"
         type='text'
         value={ obj[k]}
         onChange={(e) => setPageObj(k, e.target.value)}
      />
      </div>
      )
   }

   return (
      <div className='container'>
         <br></br><br></br>
         <h1>{ title }</h1>
      <form onSubmit={onSubmit}>
         <FormTextField label='Name' k='name'/>
         <FormTextField label='Short Name' k='short_name' />
         <FormTextField label='Image URL' k='image' />
         <br></br>
         <input type='submit' value='Submit' className='btn btn-lg btn-primary' />
      </form>
      </div>
   )
   }

export default UpdatePage
