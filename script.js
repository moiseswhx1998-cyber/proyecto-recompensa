function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if(email === "" || pass === ""){
    alert("Completa los campos");
    return;
  }

  document.getElementById("loader").style.display = "block";

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 2000);
}