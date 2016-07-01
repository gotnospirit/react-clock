import assign from 'object-assign'

const INITIAL_STATE = {
  started: false,
  paused: false,
  lastUpdate: 0,
  counter: 0
}

export default function (state = INITIAL_STATE, action)
{
  // console.log("reducer", action)
  switch (action.type)
  {
    case 'STATE':
      return assign({}, state, action.state)

    case 'START':
      return assign({}, state, {
        started: true,
        paused: false,
        lastUpdate: action.timestamp,
        counter: 0
      })

    case 'PAUSE':
      return assign({}, state, {
        paused: true
      })

    case 'RESUME':
      return assign({}, state, {
        paused: false,
        lastUpdate: action.timestamp
      })

    case 'STOP':
      return assign({}, state, {
        started: false,
        paused: false
      })

    case 'UPDATE':
      return assign({}, state, {
        lastUpdate: action.timestamp,
        counter: action.value
      })
  }
  return state
}
