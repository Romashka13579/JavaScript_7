var date_creation = new Date('March 01, 2022 00:00:00')
var date = date_creation.getDate()
var weekdays = date_creation.getDay()
var month = date_creation.getMonth()
var year = date_creation.getFullYear()
var date_real_ar = new Date()
var date_real = date_real_ar.toLocaleDateString('en-GB', { day: 'numeric' })
var month_real = date_real_ar.toLocaleDateString('en-GB', { month: 'numeric' })
var year_real = date_real_ar.toLocaleDateString('en-GB', { year: 'numeric' })

var buttons = document.getElementById("buttons")
var months = document.getElementById("months")
var month_range = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var d = date
var y = year_real - year
var w = weekdays
var m = month + 1 - (y*12)
var m_r1 = month + 1 - (y*12)
var m_r = month_real
var m_r_help = m_r
var m_help = m_r_help - 6
var date_real_help = date_real
function Button_Range() {
    if(m_r-6 >= m_r1){
        for (m_r; m_r != m_r_help-6; m_r--) {
            months.innerHTML += "<div class='month'>"+month_range[(m_r_help - 7) + ((m_r_help) - (m_r-1))]+"</div>"
        }
        m_r = m_r1-1
        for (m_help; m_help < m_r_help; m_help++) {
            if (m_help == 2 && year_real % 4 == 0){
                d -= 28
            }
            else if (m_help == 2) {
                d -= 29
            }
            else if (m_help == 4 || m_help == 6 || m_help == 9 || m_help == 11) {
                d -= 30
            }
            else {
                d -= 31
            }
        }
    }
    else{
        for (m_r; m_r != m_r1-1; m_r--) {
            months.innerHTML += "<div class='month'>"+month_range[m + (m_r_help - m_r) - 1]+"</div>"
        }
        for (m; m < month_real; m++) {
            if (m == 2 && year_real % 4 == 0) {
                d -= 28
            }
            else if (m == 2) {
                d -= 29
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
}