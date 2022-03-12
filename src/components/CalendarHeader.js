import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext.js";

import logo from "../assets/logo.png";
import dayjs from "dayjs";
function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleResetMonth() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="이미지" className="mr-2 w-15 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calandar</h1>
      <button
        onClick={handleResetMonth}
        className="border rounded py-2 px-4 mr-5"
      >
        오늘
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {`<`}
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {`>`}
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}

export default CalendarHeader;
