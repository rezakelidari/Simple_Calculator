const result = document.querySelector(".result");
const clearAll = document.querySelector(
  ".calculator .calc-button.calc-opt.all-clear"
);
const clear = document.querySelector(".calculator .calc-button.calc-opt.clear");
const numbers = document.querySelectorAll(".calculator .calc-button.calc-num");
const functions = document.querySelectorAll(
  ".calculator .calc-button.calc-fun"
);

const equal = document.querySelector(".calculator .calc-button.calc-equal");

clearAll.addEventListener("click", () => {
  result.innerHTML = "0";
});

clear.addEventListener("click", () => {
  result.innerHTML.length > 1
    ? (result.innerHTML = result.innerHTML.substring(
        0,
        result.innerHTML.length - 1
      ))
    : (result.innerHTML = "0");
});

numbers.forEach((item) => {
  item.addEventListener("click", () => {
    addNum(item.innerHTML);
  });
});

functions.forEach((item) => {
  item.addEventListener("click", () => {
    addFun(item.innerHTML);
  });
});

equal.addEventListener("click", () => {
  result.innerText = eval(result.innerHTML);
});

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  event.key === "0" ||
  event.key === "1" ||
  event.key === "2" ||
  event.key === "3" ||
  event.key === "4" ||
  event.key === "5" ||
  event.key === "6" ||
  event.key === "7" ||
  event.key === "8" ||
  event.key === "9"
    ? addNum(event.key)
    : false;

  event.key === "/" ||
  event.key === "*" ||
  event.key === "-" ||
  event.key === "+"
    ? addFun(event.key)
    : false;

  event.key === "Enter" ? (result.innerText = eval(result.innerHTML)) : false;
});

function addNum(index) {
  result.innerHTML === "0"
    ? index === "."
      ? (result.innerHTML += index)
      : (result.innerHTML = index)
    : index.innerHTML === "."
    ? result.innerHTML[result.innerHTML.length - 1] === "." ||
      result.innerHTML.includes(".")
      ? (result.innerHTML = result.innerHTML)
      : (result.innerHTML += index)
    : (result.innerHTML += index);
}

function addFun(index) {
  result.innerHTML[result.innerHTML.length - 1] !== "/" &&
  result.innerHTML[result.innerHTML.length - 1] !== "*" &&
  result.innerHTML[result.innerHTML.length - 1] !== "+" &&
  result.innerHTML[result.innerHTML.length - 1] !== "-"
    ? (result.innerHTML += index)
    : (clear.click(), (result.innerHTML += index));
}
