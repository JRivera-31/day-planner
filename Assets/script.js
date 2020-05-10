var reset
var currentDateAndTime = Date(Date.now())// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)


// display current day and time
$("#currentDay").append(currentDateAndTime)

// create function to update hours
$(document).ready(function() {
    
    function updateHours() {
       for(var i=9; i < 18; i++) {
        var currentHour = new Date().getHours();//Current hour in military time
        var timeBlock = $("#hour" + i)

            // adds class to time block to change bg color based on current time
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

// function to update hours every 15 minutes
$(document).ready(function() {
    reset = setInterval("updateHours()", 900000)
})

renderLastInput()

// add on click to save buttons/save to local storage
$(".saveBtn").on("click", function() {
    // Create variables for inputs
    var input9 = $("#input9").val()
    var input10 = $("#input10").val()
    var input11 = $("#input11").val()
    var input12 = $("#input12").val()
    var input13 = $("#input13").val()
    var input14 = $("#input14").val()
    var input15 = $("#input15").val()
    var input16 = $("#input16").val()
    var input17 = $("#input17").val()
    
    // Save all inputs to local storage
    localStorage.setItem("9", JSON.stringify(input9))
    localStorage.setItem("10", JSON.stringify(input10))
    localStorage.setItem("11", JSON.stringify(input11))
    localStorage.setItem("12", JSON.stringify(input12))
    localStorage.setItem("13", JSON.stringify(input13))
    localStorage.setItem("14", JSON.stringify(input14))
    localStorage.setItem("15", JSON.stringify(input15))
    localStorage.setItem("16", JSON.stringify(input16))
    localStorage.setItem("17", JSON.stringify(input17))
})

// create function to load local storage
function renderLastInput() {
    // get all inputs from local storage
    var storedInput9 = JSON.parse(localStorage.getItem("9"))
    $("#input9").text(storedInput9)

    var storedInput10 = JSON.parse(localStorage.getItem("10"))
    $("#input10").text(storedInput10)

    var storedInput11 = JSON.parse(localStorage.getItem("11"))
    $("#input11").text(storedInput11)

    var storedInput12 = JSON.parse(localStorage.getItem("12"))
    $("#input12").text(storedInput12)

    var storedInput13 = JSON.parse(localStorage.getItem("13"))
    $("#input13").text(storedInput13)

    var storedInput14 = JSON.parse(localStorage.getItem("14"))
    $("#input14").text(storedInput14)

    var storedInput15 = JSON.parse(localStorage.getItem("15"))
    $("#input15").text(storedInput15)

    var storedInput16 = JSON.parse(localStorage.getItem("16"))
    $("#input16").text(storedInput16)

    var storedInput17 = JSON.parse(localStorage.getItem("17"))
    $("#input17").text(storedInput17)
}

