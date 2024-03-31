/* const h1 = document.querySelector("div.vlog:first-child h1");

const superEventHandler = {
  Click: function () {
    h1.innerText = "That was a right click!";
    h1.style.color = "brown";
  },

  mouseEnter: function () {
    h1.innerText = "The mouse is here!";
    h1.style.color = "blue";
  },

  mouseLeave: function () {
    h1.innerText = "The mouse is gone!";
    h1.style.color = "pink";
  },

  resize: function () {
    h1.innerText = "You just resized!";
    h1.style.color = "red";
  },
};

h1.addEventListener("contextmenu", superEventHandler.Click);
h1.addEventListener("mouseenter", superEventHandler.mouseEnter);
h1.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize); */

const h1 = document.querySelector("div.vlog:first-child h1");

function handleTitleClcik() {
  h1.classList.toggle("clicked");
  /*  const clickedClass = "clicked"; 
  if (h1.className === "clickedClass") {
    h1.className = "";
  } else {
    h1.className = "clickedClass";
  } */
}

h1.addEventListener("click", handleTitleClcik);
