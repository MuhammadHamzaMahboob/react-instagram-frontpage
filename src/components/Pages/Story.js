import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Story = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get(`/api/v1/stories/${id}`)
      .then((response) => {
        if (response) {
          setImages(response.data.story_images.images.urls)
        } else {
          navigate('/')
        }
      })
  }, [])
  // useEffect(() => {
  //   axios.get(`/api/v1/stories/${id}`)
  //     .then((response) => {
  //       if (response) {
  //         setImages(response.data.story_images.images.urls)
  //       }
  //     }).catch((error) => {
  //       const { response } = error.response.data
  //       if (response.statusText === 404) {
  //         navigate('*')
  //       }
  //     })
  // }, [])
  return (
    <div>
      {
        images.map((image) => <img key={image} src={image} alt='' className='story' />)
      }
    </div>
  )
}

export default Story
