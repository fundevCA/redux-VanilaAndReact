const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerHTML = count;

const updateText = () => {
  number.innerHTML = count;
};

const handleAdd = () => {
  count++;
  updateText();
};
const handleMinus = () => {
  count--;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
