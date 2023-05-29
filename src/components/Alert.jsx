/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */

import { AiOutlineWarning } from "react-icons/ai";
import { MdOutlineDangerous, MdOutlineCheckCircle } from "react-icons/md";
const Alert = ({ message, type }) => {
  return (
    <div className="alert">
      <span
        style={{
          color:
            type === "success"
              ? "hsl(155, 90%, 67%)"
              : type === "warning"
              ? "orange"
              : "red",
        }}
      >
        <AlertIcon type={type} />
      </span>
      <p>{message}</p>
    </div>
  );
};

export default Alert;

const AlertIcon = ({ type }) => {
  switch (type) {
    case "success":
      return <MdOutlineCheckCircle />;
      break;
    case "warning":
      return <AiOutlineWarning />;
      break;
    case "error":
      return <MdOutlineDangerous />;
      break;
    default:
      break;
  }
};
