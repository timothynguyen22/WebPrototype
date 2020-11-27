var form = document.querySelector("form");

form.addEventListener("submit", function (event){
  event.preventDefault();
  console.log(form.elements.inputFName.value);
  console.log(form.elements.inputSName.value);
  console.log(form.elements.email.value);
  console.log(form.elements.number.value);
  console.log(form.elements.amount.value);
  console.log(form.elements.card.value);
  console.log(form.elements.month.value);
  console.log(form.elements);
  return alert("Thank You!");
});
