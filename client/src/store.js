import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let reduxStore = configureStore()
function configureStore() {
  let middleware = [thunk];
  let enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(rootReducer, enhancer);
  return store;
}

export default reduxStore;
