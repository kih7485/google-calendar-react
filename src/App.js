import { getMonth } from "./util.js";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import { useState, useContext } from "react";
import GlobalContext from "./context/GlobalContext";

import "./App.css";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  console.table(getMonth());
  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
