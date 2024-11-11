


function myWatch(){
let hour = document.getElementsByClassName('hour')[0];
let minutes = document.getElementsByClassName('minutes')[0];
let seconds = document.getElementsByClassName('seconds')[0];
let hr = document.getElementsByClassName('hr')[0];
let day = document.getElementsByClassName('day')[0];
let month = document.getElementsByClassName('month')[0];
let date = document.getElementsByClassName('date')[0];
let year = document.getElementsByClassName('year')[0];



var d = new Date();
let g = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

let myDay = d.getDay();
let myMonth = d.getMonth();
let myDate = d.getDate();
let myYear = d.getFullYear();

let h = (g>12)? g-12:g;





let days = ['sunday','monday','tuesday','wednesday','thirsday','friday','satarday']
var months =["January","February","March","April","May","June","July","August","September","October","November","Decemvber"]


hour.innerHTML = (h<10)? "0"+h:h;
minutes.innerHTML = (m<10)? "0"+m:m;
seconds.innerHTML = (s<10)? "0"+s:s;
hr.innerHTML = (g>12)? 'PM':'AM';
day.innerHTML = days[myDay]+",";
month.innerHTML = months[myMonth]+" - ";
date.innerHTML = myDate+","
year.innerHTML = myYear
}
myWatch()
setInterval(function(){
    myWatch()
},1000)