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

let saveButton = document.querySelector(".saveBtn");

saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    nineVal = document.getElementById("hour-9").value;
    localStorage.setItem("hour09", nineVal);

    tenVal = document.getElementById("hour-10").value;
    localStorage.setItem("hour10", tenVal);

    elevenVal = document.getElementById("hour-11").value;
    localStorage.setItem("hour11", elevenVal);

    twelveVal = document.getElementById("hour-12").value;
    localStorage.setItem("hour12", twelveVal);

    oneVal = document.getElementById("hour-13").value;
    localStorage.setItem("hour13", oneVal);

    twoVal = document.getElementById("hour-14").value;
    localStorage.setItem("hour14", twoVal);

    threeVal = document.getElementById("hour-15").value;
    localStorage.setItem("hour15", threeVal);

    fourVal = document.getElementById("hour-16").value;
    localStorage.setItem("hour16", fourVal);

    fiveVal = document.getElementById("hour-17").value;
    localStorage.setItem("hour17", fiveVal);
});


function renderStorage() {
    nineText.textContent = localStorage.getItem("hour09");
    tenText.textContent = localStorage.getItem("hour10");
    elevenText.textContent = localStorage.getItem("hour11");
    twelveText.textContent = localStorage.getItem("hour12");
    oneText.textContent = localStorage.getItem("hour13");
    twoText.textContent = localStorage.getItem("hour14");
    threeText.textContent = localStorage.getItem("hour15");
    fourText.textContent = localStorage.getItem("hour16");
    fiveText.textContent = localStorage.getItem("hour17");

}

renderStorage()


let currentHour = dayjs().hour()

for (let i = 0; i < timeBlock.length; i++) {
    if (timeBlock[i].dataset.time === currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("present");
    };
    if (timeBlock[i].dataset.time > currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.add("future");
    };
    if (timeBlock[i].dataset.time < currentHour) {
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("past");
    }

};
