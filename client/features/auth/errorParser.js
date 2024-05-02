// NOT HANDLING THE LOGIN ERRORS CORRECTLY YET
// NOT SPLITTING THE STRING

export function errorParser(str) {
  const errors = [];
  if (str) {
    const errorsArr = str.split(", ").map((error) => error.trim());
    // console.log(str);
    // console.log("===", errorsArr);
    errorsArr.forEach((error) => {
      switch (error) {
        case "Validation error: Validation notEmpty on password failed":
          errors.push("Please enter a password.");
          break;
        case "Validation error: Validation isEmail on email failed":
          errors.push("Please enter a valid email address.");
          break;
        case "Validation error: Validation notEmpty on email failed":
          errors.push("Please enter an email address.");
          break;
        case "Incorrect email/password":
          errors.push("Incorrect email or password");
      }
    });
  }
  return errors;
}
