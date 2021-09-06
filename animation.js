/* resets scroll to top on page refresh */
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.addEventListener("load", (event) => {
  html = document.querySelector("html");
  /* opens and closes mobile menu */
  exploreMenu = document.getElementById("exploreMenu");
  linksMenu = document.getElementById("linksMenu");
  x = document.getElementById("x");
  footer = document.getElementsByTagName("footer");
  section = document.getElementsByTagName("section");

  exploreMenu.addEventListener("click", (event) => {
    html.style.overflowY = "hidden";
    exploreMenu.style.visibility = "hidden";
    linksMenu.style.display = "block";
    footer[0].style.visibility = "hidden";

    for (let i = 0; i < section.length; i++) {
      section[i].style.visibility = "hidden";
    }
  });

  x.addEventListener("click", (event) => {
    html.style.overflowY = "auto";
    exploreMenu.style.visibility = "visible";
    linksMenu.style.display = "none";
    footer[0].style.visibility = "visible";
    for (let i = 0; i < section.length; i++) {
      section[i].style.visibility = "visible";
    }
  });
});
