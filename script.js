// ===========================
// SHOW / HIDE PASSWORD
// ===========================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";
        togglePassword.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    }else{

        password.type = "password";
        togglePassword.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    }

});

// ===========================
// LOGIN BUTTON
// ===========================

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(e){

    e.preventDefault();

    const username =
    document.querySelector('input[type="text"]').value.trim();

    const pass =
    password.value.trim();

    if(username === "" || pass === ""){

        alert("Please fill in all fields!");

        return;

    }

    loginBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';

    loginBtn.disabled = true;

    setTimeout(() => {

        loginBtn.innerHTML =
        '✔ Success';

        loginBtn.style.background =
        "linear-gradient(135deg,#16a34a,#22c55e)";

    },2000);

});

const btn = document.getElementById("loginBtn");

btn.addEventListener("click",function(e){

    const circle=document.createElement("span");

    const diameter=Math.max(btn.clientWidth,btn.clientHeight);

    circle.style.width=diameter+"px";
    circle.style.height=diameter+"px";

    circle.classList.add("ripple");

    const rect=btn.getBoundingClientRect();

    circle.style.left=e.clientX-rect.left-diameter/2+"px";
    circle.style.top=e.clientY-rect.top-diameter/2+"px";

    btn.appendChild(circle);

    setTimeout(()=>{
        circle.remove();
    },600);

});