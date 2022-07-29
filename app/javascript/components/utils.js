import { useState, useEffect } from 'react'

export const fetchData = async (url) => {
    const res = await fetch(url)
    console.log(res)
    const data = await res.json()
    console.log(data)
    return data
  }

export const getChartData = (chart_id) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
        const data = await fetchData(`http://localhost:5000/api/chart_id=${chart_id}&start_date=01-01-2013&end_date=01-01-2016`)
        setData(data)
      }
      getData()}, [])
  return data
}

export const getPageData = (obj, obj_type) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
        const data = await fetchData(`http://localhost:3000/${obj_type}/${obj.id}/data/&start_date=01-01-2013&end_date=01-01-2016`)
        setData(data)
      }
      getData()}, [])
  return data
}

export const getObject = (model, id, state) => {
  const [data, setData] = state
  useEffect(() => {
    const getData = async () => {
        const data = await fetchData(`http://localhost:5000/${model}/${id}`)
        setData(data)
      }
      getData()}, [])
  return data
}

export const postObj = async (obj, pageUrl) => {
  let fetchUrl = ''
  if(pageUrl.includes('create')){
    fetchUrl = `http://localhost:5000/${obj.parent}/${obj.parent_id}/${obj.model}/create`
  } else if(pageUrl.includes('delete')) {
    fetchUrl = `http://localhost:5000/${obj.model}/${obj.id}/delete`
  } else {
    fetchUrl = `http://localhost:5000/${obj.model}/${obj.id}/edit`
  }

  const res = await fetch(fetchUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(obj),
  })
  console.log(JSON.stringify(obj))
  const obj_id = await res.json()
  return obj_id
}
