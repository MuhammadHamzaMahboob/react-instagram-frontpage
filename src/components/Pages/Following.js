import React, { useEffect, useState } from 'react'
import getAPIData from '../../services/apigetter'
import List from '../../services/table'
import ListName from '../../services/tablelist'

const API_URL = '/api/v1/following'

const Following = () => {
  const [follows, setFollows] = useState([])

  useEffect(() => {
    const mounted = true
    getAPIData(API_URL).then((response) => {
      if (mounted) {
        setFollows(response)
      }
    })
  }, [follows])

  return (
    <div className='following-list'>
      <h3> Followings List</h3>
      <List />
      {follows.map((follower) => (
        <div key={follower.id}>
          <ListName name={follower.name} email={follower.email} />
        </div>
      ))}
    </div>
  )
}
export default Following
