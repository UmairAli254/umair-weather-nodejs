"use strict";

//Constants
const cityCountry = document.getElementById("cityCountry");
const temp = document.querySelector("#temp");
const day = document.getElementById("day");
const month = document.getElementById("month");
let searchBar = document.getElementsByClassName("search-field")[0];
let Btn = document.getElementsByClassName("search-submit")[0];
let fA = document.getElementById("fontAwesome");


//get Data Function
const getData = async (e) => {

    e.preventDefault();
    let searchVal = searchBar.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=a683d57a0e7c942516aac20f5efa82ab`;


    if (searchVal !== "") {
        cityCountry.innerText = "Please Wait, Getting Data...";// :)
        temp.innerHTML = "";
        fA.innerHTML = "";

        const response = await fetch(url);
        const data = await response.json();

        if (response.status !== 404) {
            cityCountry.innerText = data.name + ", " + data.sys.country;
            temp.innerHTML = `${data.main.temp}&deg;C`;

            let tempMode = data.weather[0].main;
            if (tempMode === "Clear")
                fA.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`;
            else if (tempMode === "Cloud")
                fA.innerHTML = `<i class="fas fa-cloud" style="color: skyblue"></i>`;
            else if (tempMode === "Rain")
                fA.innerHTML = `<i class="fas fa-cloud-rain" style="color: var(--img-sky)"></i>`;
            else if (tempMode === "Smoke")
                fA.innerHTML = `<i class="fas fa-smog" style="color: skyblue"></i>`;
            else
                fA.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`;
        }
        else {
            cityCountry.innerText = "Your city name is incorrect!";
            temp.innerHTML = "";
            fA.innerHTML = "";
        }
    }
    else {
        cityCountry.innerText = "You haven't added your city name!";
        temp.innerHTML = "";
        fA.innerHTML = "";
    }
}
Btn.addEventListener("click", getData);


//Date getting Function
const getDate = () => {
    let date = new Date();

    let mArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let month = mArr[date.getMonth()];
    day = day[date.getDay()];
    return {
        day: day,
        month: month
    };
}
let date = getDate();
day.innerText = date.day;
month.innerText = date.month;



