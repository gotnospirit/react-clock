import io from 'socket.io-client'

export default store => {
  const socket = io(`${location.protocol}//${location.hostname}:8090`)
  socket.on('state', (state) =>
    store.dispatch({
      type: 'SET_STATE',
      state
    })
  )

  return next => action => {
    if (action.meta && action.meta.remote)
    {
      socket.emit('action', action)
    }
    return next(action)
  }
}
