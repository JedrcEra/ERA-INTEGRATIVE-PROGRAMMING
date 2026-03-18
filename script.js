// =======================
// LOGIN SYSTEM
// =======================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation
    if (username === "" || password === "") {
      alert("All fields are required.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // Admin login
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("role", "admin");
      alert("Admin login successful!");
      window.location.href = "admin.html";
    } 
    // Normal user login
    else {
      localStorage.setItem("role", "user");
      alert("Login successful!");
      window.location.href = "profile.html";
    }
  });
}


// =======================
// DELETE USER (Admin)
// =======================
function deleteUser(button) {
  if (confirm("Are you sure you want to delete this user?")) {
    button.parentElement.parentElement.remove();
  }
}


// =======================
// ADD USER (Admin)
// =======================
const userForm = document.getElementById("userForm");

if (userForm) {
  userForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
      alert("Please fill in all fields.");
      return;
    }

    const table = document.getElementById("userTable");
    const newRow = table.insertRow();

    newRow.innerHTML = `
      <td>${table.rows.length}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td><button onclick="deleteUser(this)">Delete</button></td>
    `;

    alert("User added successfully!");
    userForm.reset();
  });
}