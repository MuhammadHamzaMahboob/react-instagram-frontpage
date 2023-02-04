import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import getAPIData from '../../services/apigetter'

const API_URL = '/api/v1/stories'

const Home = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const mounted = true
    getAPIData(API_URL).then((response) => {
      if (mounted) {
        setStories(response.story_images.images)
      }
    })
  }, [stories])
  return (
    <div>
      { stories.map((image) => (
        <div key={image.id}>
          <Link to={`story/${image.id}`}>
            <img src={image.urls} alt='story' className='story' />
          </Link>
        </div>
      )) }
    </div>
  )
}

export default Home
