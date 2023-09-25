// Function to calculate the area of something
export function calculateArea(radius) 
  {
    return Math.PI * radius * radius;
  }
// Function to access to swarm numberformat from inside vue templates
export function formatNumber(number, unit) {
  if (unit === "cm") {
    if (number >= 1000000) {
      number /= 1000000;
      unit = "km";
    } else if (number >= 1000) {
      number /= 1000;
      unit = "m";
    } 
  } else if (unit === "mg") {
    if (number >= 1000000) {
      number /= 1000000;
      unit = "kg";
    } else if (number >= 1000) {

      number /= 1000;
      unit = "g";
    }  
  }
  return unit ? numberformat.formatShort(number) + unit : numberformat.formatShort(number);
}

// function to position object on progress bar on the bar percent
export function calculateHeartPosition(number, maxnumber, width) {
    return  number*(width / maxnumber) - 7
  }

// function to tick date by hour then by day then by
