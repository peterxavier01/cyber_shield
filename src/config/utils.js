const PLACEHOLDER = "P4$5W0rD!";
const ORANGE = "orange";
const TRANSPARENT = "transparent";

const copyToClipboard = (generatedPassword, setAlertDetails, setShowAlert) => {
  if (generatedPassword === PLACEHOLDER) return;

  navigator.clipboard.writeText(generatedPassword);
  setShowAlert(true);
  setAlertDetails((prevDetails) => ({
    ...prevDetails,
    type: "success",
    message: "Password copied successfully",
  }));
  setTimeout(() => {
    setShowAlert(false);
  }, 3000);
};

export { copyToClipboard, PLACEHOLDER, ORANGE, TRANSPARENT };
