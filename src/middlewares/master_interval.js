import { tick } from '../actions/creators'

let IntervalID = null

const stop = () => {
  clearInterval(IntervalID)
  IntervalID = null
}

export default store => next => action => {
  switch (action.type)
  {
    case 'START':
    case 'RESUME':
      stop()

      IntervalID = setInterval(() => {
        next(tick())
      }, 1)
      break

    case 'STOP':
    case 'PAUSE':
      stop()
      break
  }
  return next(action)
}
