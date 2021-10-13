import "./App.css";
import { Provider } from "react-redux";
import {store} from './store/store'
import Modal from "./components/Modal";
import Button from "./components/Button";
import Form from "./components/Form";
import GoogleButton from "./components/GoogleButton";
import {BrowserRouter} from "react-router-dom"
import AppRouter from './router/AppRouter'




function App() {

  // <div className="App">
  //       <Form/>
  //       <GoogleButton/>
  //       {/* <Button/> */}
  //       <Modal/>
  //     </div>
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
