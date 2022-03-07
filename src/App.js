import "./App.css";
import { getMonth } from "./util.js";
function App() {
  console.table(getMonth(), "dd");
  return <div className="App"></div>;
}

export default App;
