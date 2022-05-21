const convertToTwoDigts = (inputNumber: number) => {
  return ("0" + inputNumber).slice(-2);
};

export default convertToTwoDigts;
