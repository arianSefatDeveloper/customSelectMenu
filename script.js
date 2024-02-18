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
   
            if(option.innerHTML === el.textContent){

                option.classList.add("selected")
                
            }else{

                option.classList.remove("selected")

            }

    }
    addCountries()


}


inputElem.addEventListener("keyup"  , ()=>{
    let searchWord = inputElem.value.toLowerCase()

    let userContris = countries.filter(country => country.toLowerCase().startsWith(searchWord))
    .map(country => `<li onclick="updateName(this)">${country}</li>`).join("")
    options.innerHTML = userContris ? userContris : `<p style="margin-top=10px;">Oops! Notfound</p>`
    console.log(userContris);

})
window.addEventListener("load" , addCountries())