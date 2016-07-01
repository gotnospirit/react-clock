import { createStore, applyMiddleware } from 'redux'

import ClientReducer from '../reducers/client'
import RemoteMiddleware from '../middlewares/remote'

const createStoreWithMiddleware = applyMiddleware(RemoteMiddleware)(createStore)

export const store = createStoreWithMiddleware(ClientReducer)
