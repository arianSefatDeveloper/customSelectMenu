const $ = document

const wrapperElm = $.querySelector(".wrapper")

const selectBtn = $.querySelector(".select-btn")

const options = $.querySelector(".options")
const inputElem = $.querySelector("input")


let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];


    
     function addCountries(){
        let li = null
        countries.forEach((country)=>{
            li = `<li onclick="updateName(this)">${country}</li>`
            console.log(li);
            options.insertAdjacentHTML("beforeend" , li)
        })
     }    


selectBtn.addEventListener("click",()=>{
    wrapperElm.classList.toggle("active")
})


function updateName(el){
    wrapperElm.classList.remove("active")
    selectBtn.firstElementChild.innerHTML = el.textContent
    inputElem.value = ""

        for( let option of options.children){
            console.log(option);
            if(option.innerHTML === el.textContent){

                option.classList.add("selected")
                
            }else{

                option.classList.remove("selected")

            }

    }


}
window.addEventListener("load" , addCountries())