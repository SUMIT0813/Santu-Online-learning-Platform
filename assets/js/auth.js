const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formdata = new FormData(event.target);
  const data = Object.fromEntries(formdata.entries());
  console.log("data", typeof data);
  const response = await fetch("https://santu-be.onrender.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (response.ok) {
    window.location.href = "/edu/dashboard.html";
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = result.message;
    errorMessage.style.display = "block";
  }
});

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formdata = new FormData(event.target);
  const data = Object.fromEntries(formdata.entries());
  const response = await fetch("https://santu-be.onrender.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      tAndC: data.tAndC === "on",
      role: "STUDENT",
    }),
  });
  const result = await response.json();
  if (response.ok) {
    window.location.href = "/edu/my-account.html";
  } else {
    const errorMessage = document.getElementById("error-message-register");
    errorMessage.textContent = result.message;
    errorMessage.style.display = "block";
  }
});
