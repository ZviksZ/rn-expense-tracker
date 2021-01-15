import {applyMiddleware, compose, createStore} from 'redux'
import thunk                                   from 'redux-thunk'
import {rootReducer}                           from './rootReducer'
import {GlobalStateInterface}                  from "./ducks/global/contracts/state";
import {GlobalActions}                         from "./ducks/global/actionCreators";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export type AppActions = GlobalActions
export type AppState = ReturnType<typeof rootReducer>

export interface RootStateInterface {
   global: GlobalStateInterface
}



export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

