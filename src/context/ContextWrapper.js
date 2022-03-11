import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalContext.Provier value={{ monthIndex, setMonthIndex }}>
      {props.children}
    </GlobalContext.Provier>
  );
}

export default ContextWrapper;
