import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';

 //if you will have time, rewrite it to use localStorage to store new entered patients
const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) {
        return undefined;
      }
  
      return JSON.parse(serializedState)
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

  
const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch (error) {
      console.log(error)
    }
  }

const store = createStore(rootReducer, undefined /*loadState()*/, applyMiddleware(thunk));

let timeout;
store.subscribe(() => {
    // throttle
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        saveState(store.getState());
    }, 1000);
})

export default store
