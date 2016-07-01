import React from 'react'
import { connect } from 'react-redux'

import Display from './Display'
import Controls from './Controls'

import * as actionCreators from '../action_creators'

const timestamp = () => new Date().getTime()

export class App extends React.Component
{
  constructor(props)
  {
    super(props)

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
    let diff = now - this.props.lastUpdate

    if (diff > 1000)
    {
      this.props.update(now, this.props.counter + (diff / 1000) >> 0)
    }
  }

  onResume()
  {
    let now = timestamp()

    console.log("resume", now)

    this.props.resume(now)

    this.start()
  }

  onStart()
  {
    let now = timestamp()

    console.log("started", now)

    this.props.start(now)

    this.start()
  }

  onPause()
  {
    console.log("paused")

    this.stop()

    this.props.pause()
  }

  onStop()
  {
    console.log("stopped")

    this.stop()

    this.props.stop()
  }

  render()
  {
    const { paused, started, counter } = this.props

    return (
        <div style={{
            textAlign: 'center'
        }}>
          <Display
            counter={counter}
            />

          <Controls
            paused={paused}
            started={started}
            onResume={() => this.onResume()}
            onStart={() => this.onStart()}
            onPause={() => this.onPause()}
            onStop={() => this.onStop()}
            />

        </div>
    )
  }
}

export const AppContainer = connect(
  (state) => state,
  actionCreators
)(App)
