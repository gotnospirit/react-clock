import assign from 'object-assign'

const INITIAL_STATE = {
  started: false,
  paused: false,
  counter: null
}

let lastUpdate = 0

const timestamp = () => new Date().getTime()

export default function reducer(state = INITIAL_STATE, action)
{
  switch (action.type)
  {
    case 'START':
      lastUpdate = timestamp()
      return assign({}, state, {
        started: true,
        paused: false,
        counter: 0
      })

    case 'PAUSE':
      return assign({}, state, {
        paused: true
      })

    case 'RESUME':
      lastUpdate = timestamp()
      return assign({}, state, {
        paused: false
      })

    case 'STOP':
      return assign({}, state, {
        started: false,
        paused: false
      })

    case 'RESET':
      return assign({}, state, {
        started: false,
        paused: false,
        counter: null
      })

    case 'TICK':
      let now = timestamp()
      let diff = now - lastUpdate

      if (diff > 1000)
      {
        lastUpdate = now
        return assign({}, state, {
          counter: state.counter + ((diff / 1000) >> 0)
        })
      }
  }
  return state
}
