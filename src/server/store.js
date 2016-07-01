import { createStore, applyMiddleware } from 'redux'

import ServerReducer from '../reducers/server'
import IntervalMiddleware from '../middlewares/interval'

const createStoreWithMiddleware = applyMiddleware(IntervalMiddleware)(createStore)

export const store = createStoreWithMiddleware(ServerReducer)
