const Html2H1 = document.querySelector(".html2H1")
const Html2Input = document.querySelector(".html2Input")
const Hyml2Btn = document.querySelector(".html2Btn")
const html2btnA = document.querySelector(".html2btnA")

html2btnA.onclick = () => {
    if (Html2Input.value == "7777") {
        html2btnA.setAttribute("href", "./index3.html")
    }else{
        Html2H1.innerHTML = "Kod Noto'g'ri<i class='bx bx-comment-x' ></i>"
    }
}