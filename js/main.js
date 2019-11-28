function Contact() {
    document.body.style.background = "linear-gradient(to bottom, rgb(160, 0, 0), rgb(255, 0, 200))";
    var elemeno = document.getElementById("container");
    elemeno.style.height = "490px";
    var element = document.getElementById("contact");
    element.classList.add("an");
    var element = document.getElementById("about");
    element.classList.remove("an");
    var element = document.getElementById("repo");
    element.classList.remove("an");
    setTimeout(function(){ var elementa = document.getElementById("menu"); elementa.style.opacity = "0"; }, 2000);
    setTimeout(function(){ var elementu = document.getElementById("back"); elementu.style.opacity = "1"; elementu.style.display = "unset" }, 2250);
}
function About() {
    document.body.style.background = "linear-gradient(to bottom, rgb(160, 157, 0), rgb(251, 255, 0))";
    var elemeno = document.getElementById("container");
    elemeno.style.height = "450px";
    var element = document.getElementById("about");
    element.classList.add("an");
    var element = document.getElementById("contact");
    element.classList.remove("an");
    var element = document.getElementById("repo");
    element.classList.remove("an");
    setTimeout(function(){ var elementa = document.getElementById("menu"); elementa.style.opacity = "0"; }, 250);
    setTimeout(function(){ var elementu = document.getElementById("back"); elementu.style.opacity = "1"; elementu.style.display = "unset" }, 500);
}
function Repo() {
    document.body.style.background = "linear-gradient(to bottom, rgb(0, 160, 0), rgb(102, 255, 0))";
}
function Back() {
    document.body.style.background = "linear-gradient(to bottom, rgb(0, 0, 160), rgb(0, 102, 255))";
    var elemeno = document.getElementById("container");
    elemeno.style.height = "369px";
    var element = document.getElementById("contact");
    element.classList.remove("an");
    var element = document.getElementById("about");
    element.classList.remove("an");
    var element = document.getElementById("repo");
    element.classList.remove("an");
    setTimeout(function(){ var elementa = document.getElementById("menu"); elementa.style.opacity = "1"; }, 250);
    setTimeout(function(){ var elementu = document.getElementById("back"); elementu.style.opacity = "0"; elementu.style.display = "none" }, 250);
}