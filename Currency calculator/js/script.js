"use strict";

const AMD_input = document.querySelector("#amd");
const USD_input = document.querySelector("#usd");

AMD_input.addEventListener("input", function(){
    const request = new XMLHttpRequest();

    request.open("GET", "/lesson45/Currency calculator/db/data.json");
    request.setRequestHeader("content-type", "application/json");
    request.send();
    request.addEventListener("readystatechange", () =>{
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.response);
            USD_input.value = (parseFloat(this.value) / parseFloat(data.value.usd)).toFixed(2);
        }
    });
});

USD_input.addEventListener("input", function(){
    const request = new XMLHttpRequest();
    request.open("GET", "/lesson45/Currency calculator/db/data.json");
    request.setRequestHeader("content-type", "application.json");
    request.send();

    request.addEventListener("load", () => {
        if(request.status === 200){
            const data = JSON.parse(request.response);
            AMD_input.value = (parseFloat(this.value) * parseFloat(data.value.usd)).toFixed(2)
        }
    });
});