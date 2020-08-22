import React from "react";

export default function FormattedDate(props) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = days[props.date.getDay()];
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];

  return (
    <div className="FormattedDate">
      {day}, {date} {month}
    </div>
  );
}
