const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;
function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    if (imgs.length > 0 && imgs[n]) {
        imgs[n].style.display = 'block';
    }
}
changeSlide();

if (prev_btn) {
    prev_btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (n > 0) {
            n--;
        } else {
            n = imgs.length - 1;
        }
        changeSlide();
    });
}

if (next_btn) {
    next_btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (n < imgs.length - 1) {
            n++;
        } else {
            n = 0;
        }
        changeSlide();
    });
}

const searchbar = document.getElementById("search");

searchbar.addEventListener("keyup", function() {
    const searchValue = searchbar.value.toLowerCase();

    const items = document.querySelectorAll(".searchable-item");
    items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    
    if(searchValue === "headset") {
        window.location.href = "product.html";
    }
    
});

let isSignUp = false;
const users = {}; 

const formTitle = document.getElementById("formTitle");
const authBtn = document.getElementById("authBtn");
const toggleText = document.getElementById("toggleText");
const toggleLink = document.getElementById("toggleLink");
const authForm = document.getElementById("authForm");

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const user = document.getElementById('signupUser').value;

    if(email === 'safwan10@gmail.com' && password === 'safwan9037' && user === 'safwananees') {
        alert('Sign up successful! You can now log in.');
        window.location.href = 'singing.html'; 
    } else {
        alert('Please use the correct credentials for sign up.');
    }
});
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    if(email === 'safwan10@gmail.com') {
        alert('Sign in successful!');
        window.location.href = 'index.html'; 
    } else {
        alert('Invalid email!');
    }
});
