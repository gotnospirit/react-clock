import Server from 'socket.io'

import { store } from './stores/remote'
import subscriber from './stores/subscriber'

const server = new Server().attach(8090)

subscriber(store, (state) => {
  server.emit('state', state)
})

server.on('connection', (socket) => {
  socket.emit('state', store.getState())
  socket.on('action', (action) => store.dispatch(action))
})

console.log('Listening on port 8090')
