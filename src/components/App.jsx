import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const timestamp = () => new Date().getTime()

export default class App extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state = {
      started: false,
      paused: false,
      lastUpdate: 0,
      counter: 0
    }

    this.interval = null
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
    let now = timestamp()
    let diff = now - this.state.lastUpdate

    if (diff > 1000)
    {
      this.setState({
        lastUpdate: now,
        counter: this.state.counter + (diff / 1000) >> 0
      })
    }
  }

  onResume()
  {
    console.log("resume")

    this.setState({
      paused: false,
      lastUpdate: timestamp()
    })

    this.start()
  }

  onStart()
  {
    console.log("started")

    this.setState({
      started: true,
      paused: false,
      lastUpdate: timestamp(),
      counter: 0
    })

    this.start()
  }

  onPause()
  {
    console.log("paused")

    this.stop()

    this.setState({
      paused: true
    })
  }

  onStop()
  {
    console.log("stopped")

    this.stop()

    this.setState({
      started: false,
      paused: false
    })
  }

  render()
  {
    const { paused, started, counter } = this.state

    return (
        <div style={{
            textAlign: 'center'
        }}>
          <div style={{
              fontSize: '10em'
            }}>{counter}</div>

          <div>
          {paused
            ? <RaisedButton
              onTouchTap={() => this.onResume()}>Resume</RaisedButton>
            : <RaisedButton
              disabled={!!started}
              onTouchTap={() => this.onStart()}>Start</RaisedButton>}
            <RaisedButton
              style={{
                margin: '0 .5em'
              }}
              disabled={!started || !!paused}
              onTouchTap={() => this.onPause()}>Pause</RaisedButton>
            <RaisedButton
              disabled={!started}
              onTouchTap={() => this.onStop()}>Stop</RaisedButton>
          </div>

        </div>
    )
  }
}
