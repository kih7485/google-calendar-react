import React from "react";
import Days from "./Days";

function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Days day={day} rowIdx={i} key={idx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Month;
