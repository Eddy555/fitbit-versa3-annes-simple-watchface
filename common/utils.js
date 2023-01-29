// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//https://dev.fitbit.com/build/guides/user-interface/css/
//Convert a number to a special monospace number
export function monoDigits(num, pad = true) {
  let monoNum = '';
  if (typeof num === 'number') {
    num |= 0;
    if (pad && num < 10) {
      monoNum = c0 + monoDigit(num);
    } else {
      while (num > 0) {
        monoNum = monoDigit(num % 10) + monoNum;
        num = (num / 10) | 0;
      }
    }
  } else {
    let text = num.toString();
    let textLen = text.length;
    for (let i = 0; i < textLen; i++) {
      monoNum += monoDigit(text.charAt(i));
    }
  }
  return monoNum;
}

const c0 = String.fromCharCode(0x10);
const c1 = String.fromCharCode(0x11);
const c2 = String.fromCharCode(0x12);
const c3 = String.fromCharCode(0x13);
const c4 = String.fromCharCode(0x14);
const c5 = String.fromCharCode(0x15);
const c6 = String.fromCharCode(0x16);
const c7 = String.fromCharCode(0x17);
const c8 = String.fromCharCode(0x18);
const c9 = String.fromCharCode(0x19);

function monoDigit(digit) {
  switch (digit) {
    case 0: return c0;
    case 1: return c1;
    case 2: return c2;
    case 3: return c3;
    case 4: return c4;
    case 5: return c5;
    case 6: return c6;
    case 7: return c7;
    case 8: return c8;
    case 9: return c9;
    case '0': return c0;
    case '1': return c1;
    case '2': return c2;
    case '3': return c3;
    case '4': return c4;
    case '5': return c5;
    case '6': return c6;
    case '7': return c7;
    case '8': return c8;
    case '9': return c9;
    default: return digit;
  }
}

const weekDaysEnglish = [
  "Sun","Mon", "Tue", "Wed", "Thu","Fri","Sat"
];

const monthsEnglish = [
  "Jan","Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"
];

export function getWeekDay(i){
  return weekDaysEnglish[i];
}

export function getMonth(i){
  return monthsEnglish[i];
}

export function getWeekNum(date) {
  //console.log("Date 1 " + date);
  date.setHours(0, 0, 0, 0);
  //console.log("Date 2 " + date);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  //console.log("Date 3 " + date);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  //console.log("week1 " + week1);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  let weekNumVal = 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  //console.log("weekNumVal " + weekNumVal)
  return weekNumVal;
}