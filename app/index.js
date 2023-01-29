import clock from "clock";
import document from "document";
import * as dateTime from "./datetime.js";
//import * as heartRate from "./heartrate.js";
import * as activity from "./activity.js";
//import { memory } from "system";

import { HeartRateSensor } from "heart-rate";
const hrElem = document.getElementById("heartRateText");

// Update the clock every minute
clock.granularity = "seconds";

clock.ontick = (evt) => {

  //console.log("JS memory: " + memory.js.used + "/" + memory.js.total);
  dateTime.updateDisplay(evt.date);
  //heartRate.updateReading();
  activity.updateActivity();
  dateTime.updateWeekNum(evt.date);

}


// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor();

// Declare an event handler that will be called every time a new HR value is received.
hrm.onreading = function() {
  // Peek the current sensor values
  //console.log("Current heart rate: " + hrm.heartRate);
  hrElem.text = hrm.heartRate;
}

// Begin monitoring the sensor
hrm.start();
