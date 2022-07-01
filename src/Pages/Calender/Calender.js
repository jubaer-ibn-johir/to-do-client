import React, { useState } from "react";
import Calendar from "react-calendar";
const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="my-12 ml-56 pl-56">
        <Calendar onChange={onChange} value={value} />
      </div>
      {value.toString()}
    </div>
  );
};

export default Calender;
