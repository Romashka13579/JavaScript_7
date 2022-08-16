var date = new Date('August 01, 2022 00:00:00')
var day
day = date.getDate()
var month
month = date.getMonth()
console.log(month)
var date_real = new Date()
var day_real
var day_real_help
day_real = date_real.toLocaleDateString('en-GB', {day:'numeric'})
var month = new Date()

var button = document.getElementsByClassName("button")
var monthes = document.getElementById("monthes")
var k = day
var day_real_help = day_real
function Button_Range(){
    if(day_real_help == day_real){
    }
    else if (day_real_help == day_real+1){
    }
    else if (day_real_help != day_real+1){
        k -= day_real_help
    }
    for(k; k<day_real; k++){
        buttons.innerHTML += "<button class='button'></button>"
    }
    day_real_help = day_real
}