import React from 'react'
import { connect } from 'react-redux'

import Display from './Display'
import Controls from './Controls'

import * as actionCreators from '../action_creators'

class App extends React.Component
{
  render()
  {
    const { paused, started, counter, resume, start, pause, stop } = this.props

    return (
        <div style={{
            textAlign: 'center'
        }}>
          <Display
            counter={counter} />

          <Controls
            paused={paused}
            started={started}
            onResume={resume}
            onStart={start}
            onPause={pause}
            onStop={stop} />
        </div>
    )
  }
}

export default connect(
  (state) => state,
  actionCreators
)(App)
