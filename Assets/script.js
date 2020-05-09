var currentDay = $("#currentDay")
var reset
var currentDateAndTime = Date(Date.now())// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)

// Create function to update hours
$(document).ready(function() {
    
    function updateHours() {
       $(".time-block").each(function() {
             var currentHour = new Date().getHours()//Current hour in military time
            
            if($(this) < currentHour) {
                $(this).addClass(".past")
            } else if ($(this) === currentHour) {
                $(this).removeClass(".past")
                $(this).addClass(".present")
            } else {
                $(this).removeClass(".past")
                $(this).removeClass(".present")
                $(this).addClass(".future")
            }
            console.log(this)
        })
        
    }
updateHours()
})

// functin to update hours every 60 seconds
$(document).ready(function() {
    reset = setInterval("updateHours()", 60000)
})