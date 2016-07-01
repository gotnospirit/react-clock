import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

export default function ({
  started, paused,
  onResume, onStart, onPause, onStop
}) {
  return (<div>
  {paused
    ? <RaisedButton
      onTouchTap={onResume}>Resume</RaisedButton>
    : <RaisedButton
      disabled={!!started}
      onTouchTap={onStart}>Start</RaisedButton>}
    <RaisedButton
      style={{
        margin: '0 .5em'
      }}
      disabled={!started || !!paused}
      onTouchTap={onPause}>Pause</RaisedButton>
    <RaisedButton
      disabled={!started}
      onTouchTap={onStop}>Stop</RaisedButton>
  </div>)
}
