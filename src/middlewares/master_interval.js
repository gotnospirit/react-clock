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
        if (store.getState().started)
        {
          next(tick())
        }
        else
        {
          stop()
        }
      }, 1)
      break

    case 'STOP':
    case 'PAUSE':
      stop()
      break
  }
  return next(action)
}
