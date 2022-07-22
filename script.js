var P = 0;
var R = 0;
var T = 1;

var int_ele = document.getElementById("interest");
var time_ele = document.getElementById("time-period");
var princ_ele = document.getElementById("principal");
var clac_btn = document.getElementById("calc-btn");


document.getElementById("calc-btn").disabled = true;

function onInterestCalculation() {
  var interestCalculation = document.getElementById(
    "interest_calculation"
  ).value;
  console.log(interestCalculation);
}

function onTimePeriodChange() {
  T = getTimePeriod();
}

function getTimePeriod() {
  var period = document.getElementById("select_timePeriod").value;
  var timePeriod = time_ele.value;
  if (period == "Months") {
    T = timePeriod;
  } else if (period == "Days") {
    T = timePeriod / 30;
  } else {
    T = timePeriod * 12;
  }
  return T;
}

function calculate() {
  P = parseInt(princ_ele.value);
  R = parseInt(int_ele.value);
  T = getTimePeriod();

  var simple_Interest = (P * R * T) / 100;

  alert(
    "ಅಸಲು : " +
      P +
      "\n" +
      "\n" +
      " ಬಡ್ಡಿ : " +
      simple_Interest +
      "\n " +
      "\n" +
      " ಒಟ್ಟು : " +
      parseInt(P + simple_Interest)
  );
}

function clearAll() {
  princ_ele.value = "";
  int_ele.value = "";
  time_ele.value = "";
}

function validate() {
  if (
    princ_ele.value != "" &&
    int_ele.value != "" &&
    time_ele.value != ""
  ) {
    clac_btn.disabled = false;
  }else{
    clac_btn.disabled = true;
  }
}
