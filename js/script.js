var date_creation = new Date('August 01, 2022 00:00:00')
var date
date = date_creation.getDate()
var weekdays
weekdays = date_creation.getDay()
var month
month = date_creation.getMonth()
var date_real = new Date()
var date_real
var date_real_help
date_real = date_real.toLocaleDateString('en-GB', { day: 'numeric' })
var months_real = new Date()
var month_real
month_real = months_real.toLocaleDateString('en-GB', { month: 'numeric' })
var years_real = new Date()
var year_real
year_real = years_real.toLocaleDateString('en-GB', { year: 'numeric' })

var button = document.getElementsByClassName("button")
var buttons = document.getElementById("buttons")
var months = document.getElementById("months")
var d = date
var w = weekdays
var m = month + 1
var date_real_help = date_real
function Button_Range() {
    if(w!=7){
        for(w; w != 0; w--){
            buttons.innerHTML += "<div class='date-empty'></div>"
        }
    }
    for (m; m < month_real; m++) {
        if(m==2 && year_real%4 == 0){
            d -=28
        }
        else if(m==2){
            d -=29
        }
        else if(m==4 || m==6 || m==9 || m==11){
            d -=30
        }
        else{
            d -=31
        }
    }
    if(date_real_help == date_real){
    }
    else if (date_real_help == date_real+1){
    }
    else if (date_real_help != date_real+1){
        k -= date_real_help
    }
    for (d; d <= date_real; d++) {
        buttons.innerHTML += "<button class='button'></button>"
    }
    date_real_help = date_real
}