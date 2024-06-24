const ham = document.getElementById("ham")
const menu = document.getElementById("menu")

ham.addEventListener("click", () => {
  menu.classList.add("visible")
})

window.addEventListener("click", (e) => {
  const targetClose = e.target.classList.contains("visible")
  const targetOpen = e.target.classList.contains("open")
  if (!targetClose && !targetOpen) {
    menu.classList.remove("visible")
  }  
})
