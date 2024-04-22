const Html3H1 = document.querySelector(".html3H1")
const Html3Input = document.querySelector(".html3Input")
const Hyml3Btn = document.querySelector(".html3Btn")
const html3btnA = document.querySelector(".html3btnA")
const box = document.querySelector(".box")
const box2 = document.querySelector(".box2")

const h11 = document.querySelector(".h11")
const h12 = document.querySelector(".h12")
const h13 = document.querySelector(".h13")
const Box2Btn = document.querySelector(".Box2Btn")
const BBA = document.querySelector(".BBA")


html3btnA.onclick = () => {
    if (Html3Input.value <= "10000") {
      box.style.display = "none"  
      box2.style.display = "block"  
        
     h11.innerHTML = "Sizda 10000 Pul bor edi"
     h12.innerHTML = `Yechib olingan Pul: ${Html3Input.value}`
     h13.innerHTML = `Sizda Qolgan Pul: ${"10000" - Html3Input.value}`
    }else{
        Html3H1.innerHTML = "Sizda Buncha Pul Mavjudmas<i class='bx bx-comment-x' ></i>"
    }
}
BBA.onclick = () =>{
    BBA.setAttribute("href", "./index.html")
}