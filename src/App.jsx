import { useState } from "react";
import "./App.scss";
import Checkbox from "./components/Checkbox";
import Display from "./components/Display";
import StrengthWrapper from "./components/StrengthWrapper";
import { AiOutlineArrowRight } from "react-icons/ai";
import Alert from "./components/Alert";
import { ORANGE, PLACEHOLDER, TRANSPARENT } from "./config/utils";

function App() {
  const [length, setLength] = useState(0);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState(PLACEHOLDER);
  const [color, setColor] = useState("hsl(0, 0%, 40%)");
  const [strengthLevel, setStrengthLevel] = useState(null);
  const [bgColor, setBgColor] = useState({
    barOne: TRANSPARENT,
    barTwo: TRANSPARENT,
    barThree: TRANSPARENT,
    barFour: TRANSPARENT,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertDetails, setAlertDetails] = useState({
    type: null,
    message: null,
  });

  const handleChangeLength = (event) => {
    setLength(Number(event.target.value));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    switch (name) {
      case "includeUppercase":
        setIncludeUppercase(checked);
        break;
      case "includeLowercase":
        setIncludeLowercase(checked);
        break;
      case "includeNumbers":
        setIncludeNumbers(checked);
        break;
      case "includeSymbols":
        setIncludeSymbols(checked);
        break;
      default:
        break;
    }
  };

  const generatePassword = () => {
    if (length < 6) {
      setShowAlert(true);
      setAlertDetails((prevDetails) => ({
        ...prevDetails,
        type: "warning",
        message: "Password length should not be less than 6 characters",
      }));
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      setShowAlert(true);
      setAlertDetails((prevDetails) => ({
        ...prevDetails,
        type: "warning",
        message: "Please select at least one checkbox",
      }));
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }

    let characters = "";

    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumbers) {
      characters += "0123456789";
    }
    if (includeSymbols) {
      characters += "!@#$%^&*()_+-=[]{}|;:,.<>/?";
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setGeneratedPassword(password);
    setColor("#f2f2f2e0");
    handleStrengthLevel();
  };

  const handleStrengthLevel = () => {
    if (
      includeUppercase ||
      includeLowercase ||
      includeNumbers ||
      includeSymbols
    ) {
      setStrengthLevel("Weak");
      setBgColor((bgColor) => ({
        ...bgColor,
        barOne: ORANGE,
        barTwo: TRANSPARENT,
        barThree: TRANSPARENT,
        barFour: TRANSPARENT,
      }));
    }
    if (
      (includeUppercase && includeLowercase) ||
      (includeUppercase && includeNumbers) ||
      (includeSymbols && includeNumbers) ||
      (includeLowercase && includeNumbers) ||
      (includeLowercase && includeSymbols) ||
      (includeUppercase && includeSymbols)
    ) {
      setStrengthLevel("Strong");
      setBgColor((bgColor) => ({
        ...bgColor,
        barOne: ORANGE,
        barTwo: ORANGE,
        barThree: TRANSPARENT,
        barFour: TRANSPARENT,
      }));
    }
    if (
      (includeUppercase && includeLowercase && includeNumbers) ||
      (includeUppercase && includeLowercase && includeSymbols) ||
      (includeLowercase && includeNumbers && includeSymbols) ||
      (includeNumbers && includeSymbols && includeUppercase)
    ) {
      setStrengthLevel("Medium");
      setBgColor((bgColor) => ({
        ...bgColor,
        barOne: ORANGE,
        barTwo: ORANGE,
        barThree: ORANGE,
        barFour: TRANSPARENT,
      }));
    }
    if (
      includeUppercase &&
      includeLowercase &&
      includeNumbers &&
      includeSymbols
    ) {
      setStrengthLevel("Very Strong");
      setBgColor((bgColor) => ({
        ...bgColor,
        barOne: ORANGE,
        barTwo: ORANGE,
        barThree: ORANGE,
        barFour: ORANGE,
      }));
    }
  };

  return (
    <main>
      <header>Password Generator</header>

      <Display
        generatedPassword={generatedPassword}
        color={color}
        setAlertDetails={setAlertDetails}
        setShowAlert={setShowAlert}
      />

      <div className="details">
        <div className="char-length">
          <p>Character length</p>
          <p>{length}</p>
        </div>

        <input
          type="range"
          name="pw-length"
          id="pw-length"
          value={length}
          onChange={handleChangeLength}
          min={0}
          max={20}
        />

        <div className="checkbox-wrapper">
          <Checkbox
            name="includeUppercase"
            text="Include Uppercase Letters"
            checked={includeUppercase}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            name="includeLowercase"
            text="Include Lowercase Letters"
            checked={includeLowercase}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            name="includeNumbers"
            text="Include Numbers"
            checked={includeNumbers}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            name="includeSymbols"
            text="Include Symbols"
            checked={includeSymbols}
            onChange={handleCheckboxChange}
          />
        </div>

        <StrengthWrapper strengthLevel={strengthLevel} bgColor={bgColor} />

        <div className="btn" onClick={generatePassword}>
          <button>Generate</button>
          <AiOutlineArrowRight />
        </div>
      </div>
      {showAlert && alertDetails && (
        <Alert type={alertDetails.type} message={alertDetails.message} />
      )}
    </main>
  );
}

export default App;
