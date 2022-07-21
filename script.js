
var P = 0;
var R = 0;
var T = 1;

function onInterestCalculation() {
    var interestCalculation = document.getElementById("interest_calculation").value;
    console.log(interestCalculation);
}

function onTimePeriodChange() {
    T = getTimePeriod();
}

function getTimePeriod() {
    var period = document.getElementById("select_timePeriod").value;
    var timePeriod = document.getElementById("time-period").value
    if (period == "Months") {
        T = timePeriod;
    } else if (period == "Days") {
        T = timePeriod / 30;
    } else {
        T = timePeriod * 12;
    }
    return T
}

function calculate() {
    P = parseInt(document.getElementById("principal").value);
    R = parseInt(document.getElementById("interest").value);
    T = getTimePeriod();

    var simple_Interest = (P * R * T) / 100;

  alert("ಅಸಲು : " + P + "\n" + "\n" +  " ಬಡ್ಡಿ : " + simple_Interest + "\n " + "\n" + " ಒಟ್ಟು : " + parseInt(P + simple_Interest));
}

