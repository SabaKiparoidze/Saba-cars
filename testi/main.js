const aboutUs = document.getElementById("about-us");
const aboutDiv = document.getElementById("about-us-div");
const contact = document.getElementById("contact");
const contactDiv = document.getElementById("contact-div");
const register = document.getElementById("register");
const form = document.querySelector("form");
const header = document.querySelector("header");
const welcoming = document.getElementById("welcoming");
const menu = document.getElementById("menu");
const aside = document.querySelector("aside");
const aboutUsMenu = document.getElementById("about-us-menu");
const contactMenu = document.getElementById("contact-menu");
const registerMenu = document.getElementById("register-menu");
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const submit = document.getElementById("submit");

let menuOpen = false;

menu.addEventListener("click", () => {
  if (menuOpen) {
    aside.style.display = "none";
    menuOpen = false;
  } else {
    aside.style.display = "block";
    menuOpen = true;
  }
});

aboutUsMenu.addEventListener("click", (event) => {
  event.preventDefault();
  if (aboutDiv.style.display === "none") {
    aboutDiv.style.display = "flex";
    contactDiv.style.display = "none";
    aboutDiv.style.marginLeft = "20px";
    aboutDiv.style.width = "700px";
    aboutDiv.style.fontSize = "15px";
    aside.style.display = "none";
    welcoming.style.display = "none";
  } else {
    aboutDiv.style.display = "none";
  }
});

contactMenu.addEventListener("click", (event) => {
  event.preventDefault();
  if (contactDiv.style.display === "none") {
    contactDiv.style.display = "flex";
    aboutDiv.style.display = "none";
    aside.style.display = "none";
    welcoming.style.display = "none";
    contactDiv.style.marginLeft = "20px";
    contactDiv.style.width = "700px";
    contactDiv.style.fontSize = "15px";
  } else {
    contactDiv.style.display = "none";
  }
});

registerMenu.addEventListener("click", () => {
  if (header.style.display === "none") {
    header.style.display = "flex";
    form.style.display = "none";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "none";
  } else {
    aside.style.display = "none";
    welcoming.style.display = "none";
    header.style.display = "none";
    form.style.display = "flex";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "none";
  }
});

aboutDiv.style.display = "none";
contactDiv.style.display = "none";

aboutUs.addEventListener("click", (event) => {
  event.preventDefault();
  if (aboutDiv.style.display === "none") {
    aboutDiv.style.display = "flex";
    contactDiv.style.display = "none";
  } else {
    aboutDiv.style.display = "none";
  }
});

contact.addEventListener("click", (event) => {
  event.preventDefault();
  if (contactDiv.style.display === "none") {
    contactDiv.style.display = "flex";
    aboutDiv.style.display = "none";
  } else {
    contactDiv.style.display = "none";
  }
});

register.addEventListener("click", () => {
  if (header.style.display === "none") {
    header.style.display = "flex";
    form.style.display = "none";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "none";
  } else {
    welcoming.style.display = "none";
    header.style.display = "none";
    form.style.display = "flex";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "none";
  }
});

submit.addEventListener("click", (event) => {
  if (
    email.value === "" ||
    password.value === "" ||
    username.value === "" ||
    age.value === "" ||
    gender.value === ""
  ) {
    event.preventDefault();
    alert("Please fill in all fields correctly.");
  } else if (Number(age.value) < 2006) {
    event.preventDefault();
    alert("You must be 18 years or older to register");
  }
});
