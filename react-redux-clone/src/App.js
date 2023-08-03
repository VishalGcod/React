import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/cakeContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IcecreamContainer from "./components/icecreamContainer";
import InputComponent from "./components/InputComponent";
import InputDisplay from "./components/inputDisplay";
import ApiFetching from "./components/apiFetching";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer /> */}
        {/* <InputComponent/>
        <InputDisplay/> */}
        <ApiFetching/>
      </div>
    </Provider>
  );
}

export default App;
