const btn = document.getElementById('btn')

btn.addEventListener("click", () => {
  document.body.style.background = radomBg()

console.log(radomBg())
})
function radomBg(){
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
}






