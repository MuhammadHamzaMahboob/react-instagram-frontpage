import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Header = () => (
  <div className='header'>
    <Link to='/' id='head' className='btn btn-primary'>Home</Link>
    <Link to='/follower' className='btn btn-secondary'>Followers</Link>
    <Link to='/following' className='btn btn-success'>Followings</Link>
  </div>
)

export default Header
