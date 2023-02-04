import React, { useEffect, useState } from 'react'
import getAPIData from '../../services/apigetter'
import List from '../../services/table'
import ListName from '../../services/tablelist'
// import ListName from '../../services/tablelist'

const API_URL = '/api/v1/followers'

const Follower = () => {
  const [follows, setFollows] = useState([])

  useEffect(() => {
    const mounted = true
    getAPIData(API_URL).then((response) => {
      if (mounted) {
        setFollows(response.listfollowers.followers)
      }
    })
  }, [follows])

  return (
    <div className='follower-list'>
      <List />
      {follows.map((follower) => (
        <div key={follower.id}>
          <ListName name={follower.name} email={follower.email} />
        </div>
      )) }
    </div>
  )
}

export default Follower
