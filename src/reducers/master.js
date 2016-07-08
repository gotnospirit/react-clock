import assign from 'object-assign'

const INITIAL_STATE = {
  started: false,
  paused: false,
  counter: null,
  current_level: null,
  levels: [
    { duration: 10, betting: '0.01-0.02-no-limit' },
    { duration: 5 }, // pause
    { duration: 10, betting: '0.02-0.04-dealer-choice' }
  ]
}

let LastUpdate = 0

const timestamp = () => new Date().getTime()

const shouldCountdown = (state) => !!state.levels

const getLevel = (levels, index, now) => {
  let level = levels[index]

  if (!level)
  {
    return null
  }

  let id = index + 1
  let duration = level.duration
  let betting = level.betting

  return betting
    ? { index, id, duration, betting }
    : { index, id, duration }
}

export default function reducer(state = INITIAL_STATE, action)
{
  switch (action.type)
  {
    case 'START':
      LastUpdate = timestamp()

      let new_state = assign({}, state, {
        started: true,
        paused: false
      })

      if (shouldCountdown(state))
      {
        let level = getLevel(state.levels, 0, LastUpdate)

        assign(new_state, {
          counter: level.duration,
          current_level: level
        })
      }
      else
      {
        assign(new_state, {
          counter: 0
        })
      }
      return new_state

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
        counter: null,
        current_level: null
      })

    case 'TICK':
      let now = timestamp()
      let diff = now - LastUpdate

      if (diff > 1000)
      {
        LastUpdate = now

        let elapsed = (diff / 1000) >> 0

        if (shouldCountdown(state))
        {
          let current_level = state.current_level

          if (!current_level)
          {
            return state
          }

          let new_value = state.counter - elapsed

          if (new_value < 0)
          {
            let level = getLevel(state.levels, current_level.index + 1, LastUpdate)

            if (level)
            {
              return assign({}, state, {
                counter: level.duration,
                current_level: level
              })
            }

            return assign({}, state, {
              started: false,
              paused: false,
              counter: null,
              current_level: null
            })
          }

          return assign({}, state, {
            counter: new_value
          })
        }

        return assign({}, state, {
          counter: state.counter + elapsed
        })
      }
  }
  return state
}
