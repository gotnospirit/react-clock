import { tick } from '../actions/creators'

let interval = null

export default store => next => action => {
  switch (action.type)
  {
    case 'START':
    case 'RESUME':
      clearInterval(interval)
      interval = setInterval(() => {
        next(tick())
      }, 1)
      break

    case 'STOP':
    case 'PAUSE':
      clearInterval(interval)
      interval = null
      break
  }
  return next(action)
}
