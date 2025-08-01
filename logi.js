let isSignUp = false;
const users = {};  // In-memory user store

const formTitle = document.getElementById("formTitle");
const authBtn = document.getElementById("authBtn");
const toggleText = document.getElementById("toggleText");
const toggleLink = document.getElementById("toggleLink");
const authForm = document.getElementById("authForm");

toggleLink.addEventListener("click", () => {
    isSignUp = !isSignUp;
    formTitle.textContent = isSignUp ? "Sign Up" : "Sign In";
    authBtn.textContent = isSignUp ? "Sign Up" : "Sign In";
    toggleText.innerHTML = isSignUp
    ? Already have an account? <a href="#" id="toggleLink">Sign In</a>
    : Don't have an account? <a href="#" id="toggleLink">Sign Up</a>;
  location.reload(); // quick fix to reattach event listener
});

authForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (isSignUp) {
    if (users[username]) {
    alert("User already exists!");
    } else {
    users[username] = password;
    alert("Sign up successful! Please sign in.");
    isSignUp = false;
    formTitle.textContent = "Sign In";
    authBtn.textContent = "Sign In";
    }
    } else {
    if (users[username] && users[username] === password) {
    alert("Sign in successful! Welcome " + username);
    } else {
    alert("Invalid username or password.");
    }
  }
});