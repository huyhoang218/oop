let MyDate = function (day, month, year) {
    this.day = day
    this.month = month
    this.year = year
    this.getDay = function () {
        return this.day
    }
    this.getMonth = function () {
        return this.month
    }
    this.getYear = function () {
        return this.year
    }
    this.setDay = function (day) {
        this.day = day
    }
    this.setMonth = function (month) {
        this.month = month
    }
    this.setYear = function (year) {
        this.year = year
    }
    this.setDate = function(day, month, year){
        this.day = day
        this.month = month
        this.year = year
    }
    this.toString = function(){
        str = day + '/' + month + '/' + year
        return this.str
    }
}
let date = new MyDate(22, 4, 2024)
// date.setDay(23)
// date.setMonth(3)
// date.setYear(2021)
let day = date.getDay()
let month = date.getMonth()
let year = date.getYear()
// alert(day + '/' + month + '/' + year)
date.setDate()
alert(date)