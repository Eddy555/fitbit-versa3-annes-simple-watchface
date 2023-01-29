import document from "document";
import userActivity from "user-activity";
import {today} from "user-activity";
import {units} from "user-settings";

export let stepsElem = document.getElementById("stepsText");

// ----------- STEPS --------------


export function updateActivity() {
  
  let stepsValue = (today.adjusted["steps"] || 0);
  let stepsString = stepsValue;
  stepsElem.text = stepsString;
}