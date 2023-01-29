import document from "document";
import { HeartRateSensor } from "heart-rate";

export let hrElem = document.getElementById("heartRateText");

export function updateReading() {

  if (HeartRateSensor) {
     //console.log("This device has a HeartRateSensor!");
     const hrs = new HeartRateSensor();
     hrs.addEventListener("reading", () => {
       //console.log(`Current heart rate: ${hrs.heartRate}`);
       if(hrs.heartRate == null){
         hrElem.text = "--";
       }else{
         hrElem.text = hrs.heartRate;
       }
     });
     //hrs.start();
  }

}