const multiplicationFOrm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTitle = document.querySelector("#multiplication-title span")
const multiplicationTable = document.querySelector("#multiplication-operations")

// funçoes
const createTable = (number,multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i

        const template = `<div class = "row">
        <div class = "operation"> ${number} x ${i} = </div>
        <div class = "result"> ${result} </div>
        </div> `;
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = html.template.querySelector(_row)

        multiplicationTable.appendChild(row)
    }
    multiplicationTitle.innertext = number;
}




// eventos
multiplicationFOrm.addEventListener("submit", (e) => {
    e.preventDefault();


const multiplicationNumber = +numberInput.value;
const multiplicatorNumber = +multiplicationInput.value; 


if(!multiplicationNumber || !multiplicatorNumber) return;

console.log(multiplicationNumber, multiplicatorNumber)
})