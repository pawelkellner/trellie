/* React */
import React from 'react';
import ReactDOM from 'react-dom/client';
/* Redux */
import {createStore} from "redux";
/* React-Redux */
import {Provider} from "react-redux";
/* Own */
import App from './App/App';
import myReducer from "./Reducers/reducers"

const store = createStore(myReducer);

console.log(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
