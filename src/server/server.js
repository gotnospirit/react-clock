import Server from 'socket.io'

function getClientState(store)
{
  let state = store.getState()

  return {
    started: state.started,
    paused: state.paused,
    counter: state.counter
  }
}

export default function startServer(store)
{
  const server = new Server().attach(8090)

  store.subscribe(
    () => server.emit('state', getClientState(store))
  )

  server.on('connection', (socket) => {
    socket.emit('state', getClientState(store))
    socket.on('action', (action) => store.dispatch(action))
  })

  console.log('Listening on port 8090')
}
