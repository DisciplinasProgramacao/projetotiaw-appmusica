let isExpanded = false;

function expandHeader() {
  isExpanded = !isExpanded;
  
  if (isExpanded === true) {
    document.getElementById("header").style.left = "0px";
    document.getElementById("menuButton").style.transform = "rotate(90deg)";
  } else {
    document.getElementById("header").style.left = "-170px";
    document.getElementById("menuButton").style.transform = "rotate(0deg)";
  }
}