import React from "react";
import ClearSun01d from "./Images/ClearSun01d.png";
import ClearMoon01n from "./Images/ClearMoon01n.png";
import FewCloudsSun02d from "./Images/FewCloudsSun02d.png";
import FewCloudsMoon02n from "./Images/FewCloudsMoon02n.png";
import ScatteredClouds03d03n from "./Images/ScatteredClouds03d03n.png";
import CloudMoon04n from "./Images/CloudMoon04n.png";
import CloudSun04d from "./Images/CloudSun04d.png";
import RainSun09d10d from "./Images/RainSun09d10d.png";
import RainMoon09n10n from "./Images/RainMoon09n10n.png";
import ThunderSun11d from "./Images/ThunderSun11d.png";
import ThunderMoon11n from "./Images/ThunderMoon11n.png";
import SnowSun13d from "./Images/SnowSun13d.png";
import SnowMoon13n from "./Images/SnowMoon13n.png";

export default function WeatherIcon(props) {
  const icon = props.icon;

  if (icon === "01d") {
    return (
      <img className="icon" src={`${ClearSun01d}`} alt={props.description} />
    );
  } else if (icon === "01n") {
    return (
      <img className="icon" src={`${ClearMoon01n}`} alt={props.description} />
    );
  } else if (icon === "02d") {
    return (
      <img
        className="icon"
        src={`${FewCloudsSun02d}`}
        alt={props.description}
      />
    );
  } else if (icon === "02n") {
    return (
      <img
        className="icon"
        src={`${FewCloudsMoon02n}`}
        alt={props.description}
      />
    );
  } else if (icon === "03d" || icon === "03n") {
    return (
      <img
        className="icon"
        src={`${ScatteredClouds03d03n}`}
        alt={props.description}
      />
    );
  } else if (icon === "04d") {
    return (
      <img className="icon" src={`${CloudSun04d}`} alt={props.description} />
    );
  } else if (icon === "04n") {
    return (
      <img className="icon" src={`${CloudMoon04n}`} alt={props.description} />
    );
  } else if (icon === "09d" || icon === "10d") {
    return (
      <img className="icon" src={`${RainSun09d10d}`} alt={props.description} />
    );
  } else if (icon === "09n" || icon === "10n") {
    return (
      <img className="icon" src={`${RainMoon09n10n}`} alt={props.description} />
    );
  } else if (icon === "11d") {
    return (
      <img className="icon" src={`${ThunderSun11d}`} alt={props.description} />
    );
  } else if (icon === "11n") {
    return (
      <img className="icon" src={`${ThunderMoon11n}`} alt={props.description} />
    );
  } else if (icon === "13d") {
    return (
      <img className="icon" src={`${SnowSun13d}`} alt={props.description} />
    );
  } else if (icon === "13n") {
    return (
      <img className="icon" src={`${SnowMoon13n}`} alt={props.description} />
    );
  }
}
