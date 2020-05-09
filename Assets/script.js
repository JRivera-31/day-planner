var reset
var currentDateAndTime = Date(Date.now())// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)

// Create function to update hours
$(document).ready(function() {
    
    function updateHours() {
       for(var i=9; i < 18; i++) {
        var currentHour = new Date().getHours();//Current hour in military time
        var timeBlock = $("#hour" + i)

        if(i < currentHour) {
            timeBlock.addClass("past")
        }  else if(i === currentHour) {
            timeBlock.removeClass("past")
            timeBlock.addClass("present")
        } else {
            timeBlock.removeClass("past")
            timeBlock.removeClass("present")
            timeBlock.addClass("future")
        }
    }
    
    }
updateHours()

})

// function to update hours every 60 seconds
$(document).ready(function() {
    reset = setInterval("updateHours()", 60000)
})