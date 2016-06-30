import React from 'react'

export default ({
  startedAt, pausedAt,
  onStartClick, onResumeClick, onPauseClick, onStopClick
}) =>
  <div>
    {pausedAt
      ? <button
        onClick={onResumeClick}>Resume</button>
      : <button
        disabled={!!startedAt}
        onClick={onStartClick}>Start</button>}
    <button
      disabled={!startedAt || !!pausedAt}
      onClick={onPauseClick}>Pause</button>
    <button
      disabled={!startedAt}
      onClick={onStopClick}>Stop</button>
  </div>
