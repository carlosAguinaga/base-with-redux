import "./App.css";
import { Provider } from "react-redux";
import {store} from './store/store'
import Modal from "./components/Modal";
import Button from "./components/Button";
import Form from "./components/Form";



function App() {

  

  return (
    <Provider store={store}>
      <div className="App">
        <Form/>
        <Button/>
        <Modal/>
      </div>
    </Provider>
  );
}

export default App;
