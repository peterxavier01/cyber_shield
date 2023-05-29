import { ORANGE } from "../config/utils";

/* eslint-disable react/prop-types */
const StrengthWrapper = ({ strengthLevel, bgColor }) => {
  return (
    <div className="strength-wrapper">
      <div>
        <p>Strength</p>
      </div>
      <div className="strength-bars">
        <div>{strengthLevel}</div>
        <div>
          <span
            style={{
              backgroundColor: bgColor.barOne,
              border:
                bgColor.barOne === ORANGE ? "none" : "2px solid #f2f2f2e0",
            }}
          ></span>
          <span
            style={{
              backgroundColor: bgColor.barTwo,
              border:
                bgColor.barTwo === ORANGE ? "none" : "2px solid #f2f2f2e0",
            }}
          ></span>
          <span
            style={{
              backgroundColor: bgColor.barThree,
              border:
                bgColor.barThree === ORANGE ? "none" : "2px solid #f2f2f2e0",
            }}
          ></span>
          <span
            style={{
              backgroundColor: bgColor.barFour,
              border:
                bgColor.barFour === ORANGE ? "none" : "2px solid #f2f2f2e0",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default StrengthWrapper;
