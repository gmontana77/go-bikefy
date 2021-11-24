import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { bikesReducer } from './reducers/bikesReducer'
import { alertsReducers } from './reducers/alertsReducers';
 
const composeEnhancers = composeWithDevTools({ 
});

const rootReducer = combineReducers({
    bikesReducer,
    alertsReducers
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk) 
  )
);

export default store;