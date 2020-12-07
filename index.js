let myButton = document.getElementById("button")
myButton.addEventListener("click", clickMe)
function clickMe() {
  const firstName = document.getElementsByClassName("firstName")[0];
  const lastName = document.getElementsByClassName("lastName")[0];
  const age = document.getElementsByClassName("age")[0];
  const password = document.getElementsByClassName("password")[0];
  const confirmPassword = document.getElementsByClassName("confirmPassword")[0];

  user.firstName = firstName.value;
  user.lastName = lastName.value;
  user.age = age.value;
  user.password = password.value;
  user.confirmPassword = confirmPassword.value;

  console.log(user);
}

let user = {
  firstName: "",
  lastName: "",
  age: "",
  password: "",
  confirmPassword: "",
}

console.log(user);