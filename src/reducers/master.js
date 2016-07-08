import assign from 'object-assign'

const INITIAL_STATE = {
  started: false,
  paused: false,
  counter: null
}

let LastUpdate = 0

const timestamp = () => new Date().getTime()

export default function reducer(state = INITIAL_STATE, action)
{
  switch (action.type)
  {
    case 'START':
      LastUpdate = timestamp()
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
      LastUpdate = timestamp()
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
      let diff = now - LastUpdate

      if (diff > 1000)
      {
        LastUpdate = now
        return assign({}, state, {
          counter: state.counter + ((diff / 1000) >> 0)
        })
      }
  }
  return state
}
