// Login Validation
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("All fields are required.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // If validation passes
    alert("Login successful!");
    window.location.href = "index.html";
  });
}
// delete user
function deleteUser(button){
    button.parentElement.parentElement.remove();
}

// simulate add user
document.getElementById("userForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    alert("User Added Successfully!");
});
function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

// example login

if(username === "admin" && password === "admin123"){
    window.location.href = "admin.html";
}
else{
    window.location.href = "profile.html";
}

}