var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var second = document.querySelector("#second");

var hourTotal = document.querySelector("#hourTotal");
var minuteTotal = document.querySelector("#minuteTotal");
var secondTotal = document.querySelector("#secondTotal");

var hourTotalValue = 0;
var minuteTotalValue = 0;
var secondTotalValue = 0;

var timeList = document.querySelector("#timeList");

var submit = document.querySelector("#submit");
submit.disabled = true;

var clear = document.querySelector("#clear");
clear.disabled = true;

hour.value = "";
minute.value = "";
second.value = "";

hour.addEventListener("change" ,checkValues);
minute.addEventListener("change" ,checkValues);
second.addEventListener("change" ,checkValues);

submit.addEventListener("click", function(){

    var hourText = "";
    var minuteText = "";
    var secondText = "";

    if(Number(hour.value) >= 10){
        hourText = hour.value;
    }
    else{
        hourText = `${Math.floor(Number(hour.value / 10))}${Number(hour.value % 10)}`
    }
    if(Number(minute.value) >= 10){
        minuteText = minute.value;
    }
    else{
        minuteText = `${Math.floor(Number(minute.value / 10))}${Number(minute.value % 10)}`
    }
    if(Number(second.value) >= 10){
        secondText = second.value;
    }
    else{
        secondText = `${Math.floor(Number(second.value / 10))}${Number(second.value % 10)}`
    }
    console.log(hourText + ":" + minuteText + ":" + secondText);

    // var listItem = document.createElement("li");
    // listItem.ad
    // var newChild = document.createElement(`<li>${hourText}:${minuteText}:${secondText}</li>`);
    var item = `<li>${hourText}:${minuteText}:${secondText}</li>`;
    timeList.innerHTML += item;
    if(timeList.length > 0){
        clear.disabled = false;
    }

    //adds to total value
    hourTotalValue += Number(hour.value);
    minuteTotalValue += Number(minute.value);
    secondTotalValue += Number(second.value);

    if(secondTotalValue >= 60){
        secondTotalValue -= 60;
        minuteTotalValue += 1;
    }
    if(minuteTotalValue >= 60){
        minuteTotalValue -= 60;
        hourTotalValue += 1;
    }
    console.log(hourTotalValue);
    console.log(minuteTotalValue);
    console.log(secondTotalValue);

    if(hourTotalValue >= 10){
        hourText = hourTotalValue;
    }
    else{
        hourText = `${Math.floor(hourTotalValue / 10)}${hourTotalValue % 10}`
    }
    if(minuteTotalValue >= 10){
        minuteText = minuteTotalValue;
    }
    else{
        minuteText = `${Math.floor(minuteTotalValue / 10)}${minuteTotalValue % 10}`
    }
    if(secondTotalValue >= 10){
        secondText = secondTotalValue;
    }
    else{
        secondText = `${Math.floor(secondTotalValue / 10)}${secondTotalValue % 10}`
    }
    hourTotal.textContent = hourText;
    minuteTotal.textContent = minuteText;
    secondTotal.textContent = secondText;
    hour.value = "";
    minute.value = "";
    second.value = "";
    submit.disabled = true;
});
clear.addEventListener("click",function(){
    timeList.innerHTML = "";
    this.disabled = true;
});
function checkValues(){
    if(!isNaN(hour.value) && Number(hour.value) >= 0 &&
    !isNaN(minute.value) && Number(minute.value) >= 0 && Number(minute.value) < 60 &&
    !isNaN(second.value) && Number(second.value) >= 0 && Number(second.value) < 60 &&
    hour.value.length !== 0 && minute.value.length !== 0 && second.value.length !== 0)
    {
        submit.disabled = false;
        console.log("enabled")
    }
    else
    {
        submit.disabled = true;
        console.log("disabled")
    }
}