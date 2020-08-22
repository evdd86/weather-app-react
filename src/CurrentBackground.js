import CloudsDayImage from "./CloudsDay.jpg";

function CurrentBackground(props) {
  if (props.code === "02d") {
    return `url(" + ${CloudsDayImage} + ")`;
  }
}

export default CurrentBackground;
