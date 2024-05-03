// NOT HANDLING THE LOGIN ERRORS CORRECTLY YET
// NOT SPLITTING THE STRING

export function errorParser(str) {
  const errorSet = new Set();
  if (str) {
    const errorsArr = str.split(",").map((error) => error.trim());
    errorsArr.forEach((error) => {
      switch (error) {
        case "Validation error: Validation notEmpty on password failed":
          errorSet.add("Please enter a password.");
          break;
        case "Validation error: Validation isEmail on email failed":
          errorSet.add("Please enter a valid email address.");
          break;
        case "Validation error: Validation notEmpty on email failed":
          errorSet.add("Please enter a valid email address.");
          break;
        case "Incorrect email/password":
          errorSet.add("Incorrect email or password");
      }
    });
  }
  const errors = Array.from(errorSet);
  return errors;
}
