// var date_creation = new Date('January 01, 2020 00:00:00')
// var month = date_creation.getMonth()
// var year = date_creation.getFullYear()

// var date_real_ar = new Date()
// var date_real = date_real_ar.toLocaleDateString('en-GB', { day: 'numeric' })
// var month_real = date_real_ar.toLocaleDateString('en-GB', { month: 'numeric' })
// var year_real = date_real_ar.toLocaleDateString('en-GB', { year: 'numeric' })

// var date_real_ar = new Date('May 01, 2022 00:00:00')
// var date_real = date_real_ar.getDate()
// var month_real = date_real_ar.getMonth()
// var year_real = date_real_ar.getFullYear()
// date_real += 1
// month_real += 1
// year_real += 1


// var buttons = document.getElementById("buttons")
// var months = document.getElementById("months")
// var month_range = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// var y = (year_real - year)
// var m_1 = month + 1 - (y*12)
// var m_r = month_real
// var m_r_help = m_r
// var date_real_help = date_real

// if(m_r-6 >= m_1){
//     if(m_r-6<=0){
//         date_creation.setFullYear(year_real-1)
//         var year = date_creation.getFullYear()
//         date_creation.setMonth(m_r+6)
//         var month = date_creation.getMonth()
//     }
//     else{
//         date_creation.setFullYear(year_real)
//         var year = date_creation.getFullYear()
//         date_creation.setMonth(m_r-6)
//         var month = date_creation.getMonth()
//     }
// }
// var date = date_creation.getDate()
// var weekdays = date_creation.getDay()

// y = (year_real - year)
// var m = month + 1 - (y*12)
// m_1 = month + 1 - (y*12)
// y = year_real - year
// var d = date
// var w = weekdays

// function Button_Range() {
//     for (m_r; m_r > m_1-1; m_r--) {
//         if(m_r<=0){
//             months.innerHTML += "<div class='month'>"+month_range[(m + (m_r_help - m_r) - 1)+12]+"</div>"
//         }
//         else{
//             months.innerHTML += "<div class='month'>"+month_range[m + (m_r_help - m_r) - 1]+"</div>"
//         }
//     }
//     for (m_1; m_1 < month_real; m_1++) {
//         if(m_1<=0){
//             if ((m+12) == 2 && year_real % 4 == 0) {
//                 d -= 29
//             }
//             else if ((m+12) == 2) {
//                 d -= 28
//             }
//             else if ((m+12) == 4 || (m+12) == 6 || (m+12) == 9 || (m+12) == 11) {
//                 d -= 30
//             }
//             else {
//                 d -= 31
//             }
//         }
//         else{
//             if (m == 2 && year_real % 4 == 0) {
//                 d -= 29
//             }
//             else if (m == 2) {
//                 d -= 28
//             }
//             else if (m == 4 || m == 6 || m == 9 || m == 11) {
//                 d -= 30
//             }
//             else {
//                 d -= 31
//             }
//         }
//     }
//     if (w != 7) {
//         for (w; w != 0; w--) {
//             buttons.innerHTML += "<div class='date-empty'></div>"
//         }
//     }
//     if (date_real_help == date_real) {
//     }
//     else if (date_real_help == date_real + 1) {
//     }
//     else if (date_real_help != date_real + 1) {
//         k -= date_real_help
//     }
//     for (d; d <= date_real; d++) {
//         buttons.innerHTML += "<button class='button'></button>"
//     }
//     date_real_help = date_real
// }
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

function Button_Range() {
    for (m_r; m_r > m_1 - 1; m_r--) {
        months.innerHTML += "<div class='month'>" + month_range[m + (m_r_help - m_r) - 1] + "</div>"
    }
    for (m_1; m_1 < month_real; m_1++) {
        if (m == 2 && year_real % 4 == 0) {
            d -= 29
        }
        else if (m == 2) {
            d -= 28
        }
        else if (m == 4 || m == 6 || m == 9 || m == 11) {
            d -= 30
        }
        else {
            d -= 31
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
        k -= date_real_help
    }
    for (d; d <= date_real; d++) {
        buttons.innerHTML += "<button class='button'></button>"
    }
    date_real_help = date_real
}