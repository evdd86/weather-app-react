import CloudsDayImage from "./CloudsDay.jpg";

export default function CurrentBackground(props) {
  if (props.code === "02d") {
    return `url(" + ${CloudsDayImage} + ")`;
  }
}
