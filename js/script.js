var date = new Date('May 01, 2022 00:00:00')
var day
day = date.getDate()
var month
month = date.getMonth()
var date_real = new Date()
var day_real
var day_real_help
day_real = date_real.toLocaleDateString('en-GB', { day: 'numeric' })
var months_real = new Date()
var month_real
month_real = months_real.toLocaleDateString('en-GB', { month: 'numeric' })
var years_real = new Date()
var year_real
year_real = years_real.toLocaleDateString('en-GB', { year: 'numeric' })

var button = document.getElementsByClassName("button")
var buttons = document.getElementById("buttons")
var months = document.getElementById("months")
var d = day
var m = month + 1
var day_real_help = day_real
function Button_Range() {
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
    if(day_real_help == day_real){
    }
    else if (day_real_help == day_real+1){
    }
    else if (day_real_help != day_real+1){
        k -= day_real_help
    }
    for (d; d <= day_real; d++) {
        buttons.innerHTML += "<button class='button'></button>"
    }
    day_real_help = day_real
}