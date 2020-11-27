var form = document.querySelector("form");

form.addEventListener("submit", function (event){
  event.preventDefault();
  console.log(form.elements.inputFName.value);
  console.log(form.elements.inputSName.value);
  console.log(form.elements.email.value);
  console.log(form.elements.number.value);
  if (form.cb1.checked == true) {
  console.log(form.elements.cb1.value);
  }
  if (form.cb2.checked == true) {
  console.log(form.elements.cb2.value);
  }
  if (form.cb3.checked == true) {
  console.log(form.elements.cb3.value);
  }
  if (form.cb4.checked == true) {
  console.log(form.elements.cb4.value);
  }
  console.log(form.elements);
  return alert("You're In!");

});

function myFunction() {

  const hamburger = document.getElementById('hamburger');
  location.href="nav.html";
}

 