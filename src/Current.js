import React from "react";

export default function Current(props) {
  return (
    <div className="Current">
      <div>
        It is {Math.round(props.data.temperature)} in {props.data.city}
      </div>
    </div>
  );
}
