import React from 'react'

export default ({ counter }) =>
  <div style={{
    fontSize: '10em'
  }}>{null !== counter ? counter : '-'}</div>
