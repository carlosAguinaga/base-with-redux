import "./App.css";
import { Provider } from "react-redux";
import {store} from './store/store'
import Modal from "./components/Modal";
import Button from "./components/Button";
import Form from "./components/Form";
import GoogleButton from "./components/GoogleButton";



function App() {

  
  return (
    <Provider store={store}>
      <div className="App">
        <Form/>
        <GoogleButton/>
        <Button/>
        <Modal/>
      </div>
    </Provider>
  );
}

export default App;
