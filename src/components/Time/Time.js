import React, { useEffect, useState } from "react";

export default function Time() {
  const [clockState, setclockState] = useState("");

  function getTime() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var min = new Date().getMinutes();
    if (String(date).length === 1) {
      date = "0" + String(date);
    }

    return [
      date,
      "-",
      month,
      String(year).substring(1, 4),
      "-",
      hour,
      min,
      " utc+3",
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
