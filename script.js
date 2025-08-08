const exportBtn = document.getElementById("exportBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

const htmlTab = document.getElementById("htmlTab");
const nextTab = document.getElementById("nextTab");

const htmlContent = document.getElementById("htmlContent");
const nextContent = document.getElementById("nextContent");

exportBtn.onclick = () => popup.classList.remove("hidden");
closeBtn.onclick = () => popup.classList.add("hidden");

htmlTab.onclick = () => {
  htmlTab.classList.add("active");
  nextTab.classList.remove("active");
  htmlContent.classList.remove("hidden");
  nextContent.classList.add("hidden");
};

nextTab.onclick = () => {
  nextTab.classList.add("active");
  htmlTab.classList.remove("active");
  nextContent.classList.remove("hidden");
  htmlContent.classList.add("hidden");
};
