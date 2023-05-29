/* eslint-disable react/prop-types */
import { copyToClipboard } from "../config/utils";
import { MdOutlineFileCopy } from "react-icons/md";

const Display = ({
  generatedPassword,
  color,
  setShowAlert,
  setAlertDetails,
}) => {
  return (
    <div className="display">
      <p style={{ color: color }}>{generatedPassword}</p>
      <MdOutlineFileCopy
        onClick={() =>
          copyToClipboard(generatedPassword, setAlertDetails, setShowAlert)
        }
      />
    </div>
  );
};

export default Display;
