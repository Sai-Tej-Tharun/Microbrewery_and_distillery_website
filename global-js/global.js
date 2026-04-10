// rtl logic
const rtlToggle = document.getElementById("rtlToggle");

rtlToggle?.addEventListener("click", () => {
  const html = document.documentElement;

  if (html.getAttribute("dir") === "rtl") {
    html.setAttribute("dir", "ltr");
    localStorage.setItem("dir", "ltr");
  } else {
    html.setAttribute("dir", "rtl");
    localStorage.setItem("dir", "rtl");
  }
});
const rtlIcon = document.getElementById("rtlIcon");

function updateRTLIcon() {
  if (document.documentElement.dir === "rtl") {
    rtlIcon.className = "fa fa-align-right";
  } else {
    rtlIcon.className = "fa fa-align-left";
  }
}

rtlToggle?.addEventListener("click", updateRTLIcon);
updateRTLIcon();

