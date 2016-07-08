import React from 'react'

export default function ({ counter }) {
  return (
    <div style={{
        fontSize: '10em'
      }}>{null !== counter ? counter : '-'}</div>)
}
