import io from 'socket.io-client'

import { setState } from '../actions/creators'

export default store => {
  const socket = io(`${location.protocol}//${location.hostname}:8090`)
  socket.on('state', (state) =>
    store.dispatch(setState(state))
  )

  return next => action => {
    if (action.meta && action.meta.master)
    {
      socket.emit('action', action)
    }
    return next(action)
  }
}
