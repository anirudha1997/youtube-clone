import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <div className="w-screen flex">
        <Sidebar />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
