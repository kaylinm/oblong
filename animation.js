/* resets scroll to top on page refresh */
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.addEventListener("load", (event) => {
  /* enables vertical scrolling after animation ends */
  body = document.body;
  html = document.querySelector("html");
  setTimeout(function () {
    html.style.overflowY = "auto";
    body.style.overflowY = "auto";
  }, 1000);

  /* opens and closes mobile menu */
  exploreMenu = document.getElementById("exploreMenu");
  linksMenu = document.getElementById("linksMenu");
  x = document.getElementById("x");

  exploreMenu.addEventListener("click", (event) => {
    html.style.overflowY = "hidden";
    exploreMenu.style.display = "none";
    linksMenu.style.display = "block";
  });

  x.addEventListener("click", (event) => {
    html.style.overflowY = "auto";
    exploreMenu.style.display = "block";
    linksMenu.style.display = "none";
  });
});
