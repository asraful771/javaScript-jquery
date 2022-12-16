const form = document.querySelector(".form");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const show = document.querySelector(".show");

const addtion = (event) => {
  event.preventDefault();
  const a = parseFloat(input1.value);
  const b = parseFloat(input2.value);
  const c = parseFloat(input3.value);

  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  show.innerText = area;

  input1.value = "";
  input2.value = "";
  input3.value = "";
};

form.addEventListener("submit", addtion);
