import React from "react";
import logo from "../assets/logo.png";
function CalendarHeader() {
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="이미지" className="mr-2 w-15 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calandar</h1>
      <button className="border rounded py-2 px-4 mr-5">오늘</button>
      <button>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {`<`}
        </span>
      </button>
      <button>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {`>`}
        </span>
      </button>
    </header>
  );
}

export default CalendarHeader;
