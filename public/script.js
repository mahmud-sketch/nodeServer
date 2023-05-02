document
  .getElementById("increaseFont")
  .addEventListener("click", increaseFontSize);
document
  .getElementById("decreaseFont")
  .addEventListener("click", DecreaseFontSize);

let setFontSizeInitially = document.getElementsByTagName("p")[0];
setFontSizeInitially.setAttribute(
  "style",
  `font-weight:bold; font-size: 18px;`
);

function increaseFontSize() {
  let fontSize = parseInt(document.getElementsByTagName("p")[0].style.fontSize);
  let selected = document.getElementsByTagName("p")[0];
  selected.setAttribute(
    "style",
    `font-weight:bold; font-size: ${fontSize + 2}px;`
  );
}
function DecreaseFontSize() {
  let fontSize = parseInt(document.getElementsByTagName("p")[0].style.fontSize);
  let selected = document.getElementsByTagName("p")[0];
  selected.setAttribute(
    "style",
    `font-weight:bold; font-size: ${fontSize - 2}px;`
  );
}
