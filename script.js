const skillCircle = document.getElementById("circleSkill");
const html = document.getElementById("html");
const markdown = document.getElementById("markdown");
const css = document.getElementById("css");
const js = document.getElementById("js");
const git = document.getElementById("git");
const wordpress = document.getElementById("wordpress");

// fonction pour afficher les symboles skill
const afficheSymbole = () => {
  html.classList.toggle("visible");
  html.classList.toggle("html");
  markdown.classList.toggle("visible");
  markdown.classList.toggle("markdown");
  css.classList.toggle("visible");
  css.classList.toggle("css");
  js.classList.toggle("visible");
  js.classList.toggle("js");
  git.classList.toggle("visible");
  git.classList.toggle("git");
  wordpress.classList.toggle("visible");
  wordpress.classList.toggle("wordpress");
};

// fonction pour event clik circle
skillCircle.addEventListener("click", afficheSymbole);
