import React from 'react'

import Display from './Display'
import Controls from './Controls'

const getTimestamp = () => (new Date().getTime() / 1000) >> 0

export default class App extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state = {
      startedAt: null,
      pausedAt: null,
      lastUpdate: 0,
      counter: 0
    }

    this.interval = null;
  }

  stop()
  {
      clearInterval(this.interval)
  }

  start()
  {
      clearInterval(this.interval)
      this.interval = setInterval(() => this.onTick(), 1)
  }

  onTick()
  {
    let now = getTimestamp()
    let delay = now - this.state.lastUpdate

    if (now - this.state.lastUpdate)
    {
      this.setState({
        lastUpdate: now,
        counter: this.state.counter + 1
      })
    }
  }

  onResume()
  {
    let now = getTimestamp()

    console.log("resume", now)

    this.setState({
      pausedAt: null,
      lastUpdate: now
    })

    this.start()
  }

  onStart()
  {
    let now = getTimestamp()

    console.log("started", now)

    this.setState({
      startedAt: now,
      pausedAt: null,
      lastUpdate: now,
      counter: 0
    })

    this.start()
  }

  onPause()
  {
    let now = getTimestamp()

    console.log("paused", now)

    this.stop()

    this.setState({
      pausedAt: now
    })
  }

  onStop()
  {
    console.log("stopped")

    this.stop()

    this.setState({
      startedAt: null,
      pausedAt: null
    })
  }

  render()
  {
    return (
      <div>
        <Display
          {...this.state} />
        <Controls
          {...this.state}
          onStartClick={() => this.onStart()}
          onResumeClick={() => this.onResume()}
          onPauseClick={() => this.onPause()}
          onStopClick={() => this.onStop()} />
      </div>
    )
  }
}
