let interval = null

const timestamp = () => new Date().getTime()

export default store => next => action => {
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
      interval = null
      break
  }
  return next(action)
}
