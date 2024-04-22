const Html1H1 = document.querySelector(".html1H1")
const Html1Input = document.querySelector(".html1Input")
const Hyml1Btn = document.querySelector(".html1Btn")
const Hyml1BtnA = document.querySelector(".html1btnA")




Hyml1BtnA.onclick = () => {
    if (Html1Input.value == "Alex") {
        Hyml1BtnA.setAttribute("href", "./index2.html")
    }else{
        Html1H1.innerHTML = "Ism Xato<i class='bx bx-comment-x' ></i>"
    }
}
