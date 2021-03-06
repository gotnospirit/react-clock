import React from 'react'
import { connect } from 'react-redux'

import Display from './Display'
import Controls from './Controls'

import * as actionCreators from '../../actions/creators'

const App = ({ paused, started, counter, current_level, resume, start, pause, stop, reset }) => {
  return (
    <div style={{
        textAlign: 'center'
    }}>
      <Display
        level={current_level}
        counter={counter} />

      <Controls
        paused={paused}
        started={started}
        onResume={resume}
        onStart={start}
        onPause={pause}
        onStop={stop}
        onReset={reset} />
    </div>)
}

export default connect(
  (state) => state,
  actionCreators
)(App)
