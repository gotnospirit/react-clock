import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'

let interval = null

const timestamp = () => new Date().getTime()

const createStoreWithMiddleware = applyMiddleware(
  store => next => action => {
    switch (action.type)
    {
      case 'START':
      case 'RESUME':
        clearInterval(interval)
        interval = setInterval(() => {
          let now = timestamp()
          let diff = now - store.getState().lastUpdate

          if (diff > 1000)
          {
            next({
              type: 'UPDATE',
              timestamp: now,
              value: (diff / 1000) >> 0
            })
          }
        }, 1)
        break

      case 'STOP':
      case 'PAUSE':
        clearInterval(interval)
        break
    }
    return next(action)
  }
)(createStore)

export default function makeStore()
{
  return createStoreWithMiddleware(reducer)
}
