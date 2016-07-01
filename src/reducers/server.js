import assign from 'object-assign'

const INITIAL_STATE = {
  started: false,
  paused: false,
  lastUpdate: 0,
  counter: 0
}

const timestamp = () => new Date().getTime()

export default function reducer(state = INITIAL_STATE, action)
{
  switch (action.type)
  {
    case 'START':
      return assign({}, state, {
        started: true,
        paused: false,
        lastUpdate: timestamp(),
        counter: 0
      })

    case 'PAUSE':
      return assign({}, state, {
        paused: true
      })

    case 'RESUME':
      return assign({}, state, {
        paused: false,
        lastUpdate: timestamp()
      })

    case 'STOP':
      return assign({}, state, {
        started: false,
        paused: false
      })

    case 'UPDATE':
      return assign({}, state, {
        lastUpdate: action.timestamp,
        counter: state.counter + action.value
      })
  }
  return state
}
