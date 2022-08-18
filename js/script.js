var date_creation = new Date('January 01, 2022 00:00:00')
var month = date_creation.getMonth()
var year = date_creation.getFullYear()

// var date_real_ar = new Date('August 01, 2021 00:00:00')
// var date_real = date_real_ar.getDate()
// var month_real = date_real_ar.getMonth()
// var year_real = date_real_ar.getFullYear()
// date_real += 1
// month_real += 1
// year_real
var date_real_ar = new Date()
var date_real = date_real_ar.toLocaleDateString('en-GB', { day: 'numeric' })
var month_real = date_real_ar.toLocaleDateString('en-GB', { month: 'numeric' })
var year_real = date_real_ar.toLocaleDateString('en-GB', { year: 'numeric' })


var buttons = document.getElementById("buttons")
var months = document.getElementById("months")
var month_range = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var y = (year_real - year)

if (y != 0) {
    date_creation.setFullYear(year_real)
    var year = date_creation.getFullYear()
}

var m_1 = month + 1
var m_r = month_real
var m_r_help = m_r
var date_real_help = date_real

if (m_r - 6 >= m_1) {
    date_creation.setMonth(m_r - 6)
    var month = date_creation.getMonth()
}
var date = date_creation.getDate()
var weekdays = date_creation.getDay()

var m = month + 1
m_1 = month + 1
var d = date
var w = weekdays

var buttoncount = [];
var d1 = date

function Button_Range() {
    for (m_r; m_r > m_1 - 1; m_r--) {
        months.innerHTML += "<div class='month'>" + month_range[m + (m_r_help - m_r) - 1] + "</div>"
    }
    for (m; m < month_real; m++) {
        if (m == 2 && year_real % 4 == 0) {
            d -= 29
            d1 +=29
        }
        else if (m == 2) {
            d -= 28
            d1 +=28
        }
        else if (m == 4 || m == 6 || m == 9 || m == 11) {
            d -= 30
            d1 +=30
        }
        else {
            d -= 31
            d1 +=31
        }
    }
    if (w != 7) {
        for (w; w != 0; w--) {
            buttons.innerHTML += "<div class='date-empty'></div>"
        }
    }
    if (date_real_help == date_real) {
    }
    else if (date_real_help == date_real + 1) {
    }
    else if (date_real_help != date_real + 1) {
        d -= date_real_help
    }
    for (d; d <= date_real; d++){
        d1--
        buttoncount.push(200)
        buttons.innerHTML += "<button class='button' id="+d1+" onclick='Color("+d1+")' onpointerover='Button_Help("+d1+") onpointerout='Button_Delete("+d1+")'></button>"
    }
    date_real_help = date_real
}
function Color(d1){
    var button_id = document.getElementById(""+d1+"")
    rgb2 = buttoncount[d1]
    button_id.style.background = "rgb(255, "+rgb2+", 255)"
    if(buttoncount[d1] != 40){
        buttoncount[d1] -= 40
    }
    else{}
}
// function Button_Help(d1){
//     var d1_1 = document.getElementById(""+d1+"")
//     d1_1.innerHTML += "<div id='button-help'>"
//     var button_help = document.getElementById("button-help")
//     button_help.style.width = "10px"
//     button_help.style.height = "10px"
//     button_help.style.background = "white"
// }
// function Button_Delete(d1){
//     var d1_1 = document.getElementById(""+d1+"")
//     d1_1.innerHTML += "<div id='button-help'>"
//     var button_help = document.getElementById("button-help")
//     button_help.remove()
// }