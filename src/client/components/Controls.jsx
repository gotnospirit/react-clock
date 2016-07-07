import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  marginLeft: '.5em'
}

export default function ({
  started, paused,
  onResume, onStart, onPause, onStop, onReset
}) {
  return (<div>
  {paused
    ? <RaisedButton
      onTouchTap={onResume}>Resume</RaisedButton>
    : <RaisedButton
      disabled={!!started}
      onTouchTap={onStart}>Start</RaisedButton>}
    <RaisedButton
      style={styles}
      disabled={!started || !!paused}
      onTouchTap={onPause}>Pause</RaisedButton>
    <RaisedButton
      style={styles}
      disabled={!started}
      onTouchTap={onStop}>Stop</RaisedButton>
    <RaisedButton
      style={styles}
      disabled={started}
      onTouchTap={onReset}>Reset</RaisedButton>
  </div>)
}
