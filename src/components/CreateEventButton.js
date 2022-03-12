import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

import plusImg from "../assets/plus.svg";

function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      className="border p-2 rounded-full flex item-center shadow-md hover:shadow-2xl"
      onClick={() => setShowEventModal(true)}
    >
      <img src={plusImg} alt="이벤트등록버튼" className="w-7 h-7" />
      <span className="pl-3 pr-7">추가</span>
    </button>
  );
}

export default CreateEventButton;
