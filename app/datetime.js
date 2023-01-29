import document from "document";
import * as util from "../common/utils";

const weekLableElem = document.getElementById("weekLabelText");
const weekNumElem = document.getElementById("weekNumText");
const dElem = document.getElementById("dateText");
const hmElem = document.getElementById("hoursMinutesText");
//const sElem = document.getElementById("secondsText");
import { preferences } from "user-settings";

let weekText = document.getElementById("weekText");
weekText.groupTransform.rotate.angle = -90;

export function updateDisplay(now) {
  //Date
  dElem.text = util.getWeekDay(now.getDay())+ " "+ now.getDate() + " " + util.getMonth(now.getMonth()) + " " + now.getFullYear();
  
  //Time
  let hours = now.getHours();
  if (preferences.clockDisplay === "12h") {
    hours = (hours + 24) % 12 || 12;
  } else {
    hours = util.zeroPad(hours);
  }
  let mins = util.monoDigits(now.getMinutes());
  //let secs = util.monoDigits(now.getSeconds());
  hmElem.text = hours + ':' + mins;
  //sElem.text = secs;  

 
}

export function updateWeekNum(now) {
  //Week number
  weekNumElem.text = util.getWeekNum(now);
}