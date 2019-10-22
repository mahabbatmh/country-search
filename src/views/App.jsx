import React from 'react';
import {Provider} from "react-redux";
import store from "../store";
import BaseContainer from "views/containers/BaseContainer";

function App() {
  return (
    <Provider store={store}>
      <BaseContainer/>
    </Provider>
  );
}

export default App;
