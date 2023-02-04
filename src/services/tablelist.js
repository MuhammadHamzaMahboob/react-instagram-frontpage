import React from 'react'

const ListName = ({ name, email }) => (
  <table className='table'>
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    </tbody>
  </table>
)
export default ListName
