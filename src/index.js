import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



// //STORE: A globalized state

// //ACTION: describes what you want to do(the name of the action), a simple function that returns an object
// const increment = () => {
//   return{
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return{
//     type: 'DECREMENT'
//   }
// }

// //REDUCER; how your action transforms the state into the next state
// const counter = (state = 0, action) => {
//   switch(action.type){
//     default:
//       return state;
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   } 
// };

// let store = configureStore(counter);

// //DISPATCH
// store.dispatch(increment());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

