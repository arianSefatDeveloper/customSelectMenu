const $ = document

const wrapperElm = $.querySelector(".wrapper")

const selectBtn = $.querySelector(".select-btn")


selectBtn.addEventListener("click",()=>{
    wrapperElm.classList.toggle("active")
})