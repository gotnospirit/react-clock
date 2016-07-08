import React from 'react'

const counterStyles = {
  fontSize: '10em',
  display: 'block'
}

export default ({ counter, level }) =>
  <div>
    <span style={counterStyles}>{null !== counter ? counter : '-'}</span>
    <span>{!level
      ? "-"
      : (level.betting
        ? level.betting
        : "[pause]")}</span>
  </div>
