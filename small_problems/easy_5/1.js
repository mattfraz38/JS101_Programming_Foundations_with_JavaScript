// this is a hexadecimal escape sequence
const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MIN = 60;
const ROUND_VAL = '00';
const FULL_ANGLE = 360;


const dms = angle => {
  angle = negativeAngle(angle);
  if (angle % 2 === 0) return roundAngle(angle);

  let degrees = Math.trunc(angle);
  let angleDecimal = (angle - degrees);;
  let minutes = angleDecimal * MINUTES_PER_DEGREE;
  let minutesDecimal = (minutes - Math.trunc(minutes));
  let seconds = Math.trunc(minutesDecimal * SECONDS_PER_MIN);

  return `${degrees}${DEGREE}${addLeadingZero(Math.trunc(minutes))}"${addLeadingZero(seconds)}'`;
};

const roundAngle = angle => {
  return `${angle}${DEGREE}${ROUND_VAL}"${ROUND_VAL}'`;
};

const addLeadingZero = num => {
  num = String(num);
  if (num.length !== 2) return '0' + num;

  return num;
};

const negativeAngle = angle => {
  if ((angle < 0) && Math.abs(angle) > FULL_ANGLE) {
    return FULL_ANGLE + (FULL_ANGLE + angle);
  } else if (angle > FULL_ANGLE) {
    return angle - FULL_ANGLE;
  } else if ((angle < 0) && (angle < FULL_ANGLE)) {
    return FULL_ANGLE - Math.abs(angle);
  }

  return angle;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"