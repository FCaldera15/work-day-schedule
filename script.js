let currentDay = document.querySelector("#currentDay")
let timeBlock = document.querySelectorAll(".time-block")
currentDay.textContent = dayjs().format('MMM DD, YYYY')

let nineText = document.querySelector("#hour-9");
let tenText = document.querySelector("#hour-10");
let elevenText = document.querySelector("#hour-11");
let twelveText = document.querySelector("#hour-12");
let oneText = document.querySelector("#hour-13");
let twoText = document.querySelector("#hour-14");
let threeText = document.querySelector("#hour-15");
let fourText = document.querySelector("#hour-16");
let fiveText = document.querySelector("#hour-17");


$(".btn").click(function () {
    console.log(this)
    let textArea = $(this).siblings("textarea").val()
    console.log(textArea)
    let rowTime = $(this).attr("data-time")
    localStorage.setItem(rowTime, textArea)
})


function renderStorage() {
    nineText.textContent = localStorage.getItem("9");
    tenText.textContent = localStorage.getItem("10");
    elevenText.textContent = localStorage.getItem("11");
    twelveText.textContent = localStorage.getItem("12");
    oneText.textContent = localStorage.getItem("13");
    twoText.textContent = localStorage.getItem("14");
    threeText.textContent = localStorage.getItem("15");
    fourText.textContent = localStorage.getItem("16");
    fiveText.textContent = localStorage.getItem("17");

}

renderStorage()


let currentHour = dayjs().hour()

for (let i = 0; i < timeBlock.length; i++) {
    if (parseInt(timeBlock[i].dataset.time) === currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("present");
    };
    if (parseInt(timeBlock[i].dataset.time) > currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.add("future");
    };
    if (parseInt(timeBlock[i].dataset.time) < currentHour) {
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("past");
    }

};
