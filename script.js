const output = document.getElementById("output")
const form = document.getElementById("calc_form")
const operand_btns = document.querySelectorAll("button[data-type=operand]")
form.addEventListener("submit", (e) => {
  e.preventDefault();
})
let is_operator = false
operand_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (output.value == "0") {
      output.value = e.target.value
    } else if (is_operator) {
      is_operator = false;
      output.value = e.target.value
    } else if (output.value.includes(".")) {
      output.value = output.value + "" + e.target.value.replace(".", "")
    } else {
      output.value = output.value + "" + e.target.value
    }
  })
})
