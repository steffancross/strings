export function setStyles(
  primaryColor,
  secondaryColor,
  tertiaryColor,
  columns
) {
  document.documentElement.style.setProperty("--primary-color", primaryColor);
  document.documentElement.style.setProperty(
    "--secondary-color",
    secondaryColor
  );
  document.documentElement.style.setProperty("--tertiary-color", tertiaryColor);
  document.documentElement.style.setProperty("--grid-cols", columns);
}
