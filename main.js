const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.getElementById('time');

function setDate() {
    //get the current date from Date() constructor
  const date = new Date();

  //get the current seconds
   const seconds = date.getSeconds();

   //get the current minutes
   const minutes = date.getMinutes();

   //get the current hour
   const hours = date.getHours();
   const hr = hours - 12;
   time.textContent = `The current time is ${hr} : ${minutes} : ${seconds}`;

   //convert the seconds to degrees e.g 60sec/60 = 1 then times 360
   const secDegree = ((seconds / 60) * 360) + 90; // added 90 to offset it cos we set it in the css as rotate(90deg)
   secHand.style.transform = `rotate(${secDegree}deg)`;
   
   //convert the minutes to degrees
   const minDegree = ((minutes / 60) * 360) + 90;
   minHand.style.transform = `rotate(${minDegree}deg)`;

   // convert the hours to degrees
   const hourDegree = ((hours / 12) * 360) + 90;
   hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);