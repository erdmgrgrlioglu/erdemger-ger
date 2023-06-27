import React, { useEffect, useState } from "react";

export default function Time() {
  const [clockState, setclockState] = useState("");

  var offset = new Date().getTimezoneOffset();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  offset = -(offset / 60);
  if (offset > -1) {
    offset = ["+", String(offset)].join("");
  }

  function getTime() {
    var date = new Date().getDate();
    var hour = new Date().getHours();
    var min = new Date().getMinutes();

    if (String(date).length === 1) {
      date = ["0" + String(date)].join("");
    }

    return [
      date,
      "-",
      month,
      String(year).substring(1, 4),
      "-",
      hour,
      min,
      " utc",
      offset,
    ].join("");
  }

  useEffect(() => {
    setclockState(getTime()); // set on load
    setInterval(() => {
      setclockState(getTime()); // update every half second
    }, 500);
  }, []);

  return <p>{clockState}</p>;
}
