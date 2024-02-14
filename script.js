const sidebarbtn = document.getElementById("sidebarbtn");
const sidebar = document.getElementById("sidebar");

sidebarbtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    sidebarbtn.classList.toggle("active");
});