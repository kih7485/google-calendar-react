import React from "react";

import plusImg from "../assets/plus.svg";

function CreateEventButton() {
  return (
    <button className="border p-2 rounded-full flex item-center shadow-md hover:shadow-2xl">
      <img src={plusImg} alt="이벤트등록버튼" className="w-7 h-7" />
    </button>
  );
}

export default CreateEventButton;
